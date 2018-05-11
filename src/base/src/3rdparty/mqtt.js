import DeviceInfo from 'react-native-device-info';

let RECONNECT_TIMEOUT_SEC = 10;
let MAX_RETRIES = 5;
let HEARTBEAT_INTERVAL_MS = 15000;

let $emit
// function $emit(event, data) {
//   console.log('Emitting: ', arguments)
// }

function $apply(f) {
  return f();
}

function $failure(e) {
  console.warn('Failed to send message. Error: ', e);
}

export default function createMQTTConnection(MQTT, event) {
  $emit = event
  let $connect_attempt = 0;
  let $subscription_map = {};

  let client = new Paho.MQTT.Client(MQTT.hostname, Number(MQTT.port), MQTT.clientId);
  console.log(MQTT)
  let retryInteval = function(k) {
    // For k attempts, generate a random interval of time between 0 and 2^k - 1.
    // If you are able to reconnect, reset k to 1
    // If reconnection fails, k increases by 1 and the process restarts at step 1.
    // To truncate the max interval, when a certain number of attempts k has been reached, k stops increasing after each attempt.

    let maxInterval = Math.pow(2, Math.min($connect_attempt + 1, 60)) - 1; // Max interval is 32 seconds
    // generate the interval to a random number between 0 and the maxInterval determined from above
    return ((1 + Math.random()) * maxInterval)/2;
  };

  let retryConnect = function(src) {
    console.log('onConnectionLost >> retryConnect: ', src, arguments)
    let $reconnect_delay = retryInteval();
    let checkConnect = () => {
      if ($reconnect_delay <= 0) {
        return connect();
      }

      $reconnect_delay -= 1;
      console.log('Re-connect MQTT in ', $reconnect_delay, 's')
      setTimeout(checkConnect, 1000);
    }

    return setTimeout(checkConnect, 0);
  };

  let connected = () => $connect_attempt == 0;

  // called when a message arrives
  let onMessageArrived =  function(message) {
    let topic   = message.destinationName;
    let payload = JSON.parse(message.payloadString);

    console.debug(`MQTT: Received message on [${topic}]`);

    if (!Array.isArray($subscription_map[topic])) {
      return console.info(`MQTT: No callback registered for topic '${topic}'.`);
    }

    for (let callback of $subscription_map[topic]) {
      setTimeout(() => { callback(payload, message) }, 0);
    }

    return $emit('mqtt:message-arrived', message, payload);
  };

  let onUnsubscribeSuccess = function(context) {
    console.info("MQTT: Successfully unsubscribed from ", context.invocationContext.topic);
    return $emit('mqtt:unsubscribe-success', context);
  };

  let onUnsubscribeFailure = function(context) {
    console.warn("MQTT: Failed to unsubscribe from ", context.invocationContext.topic);
    return $emit('mqtt:unsubscribe-failure', context);
  };


  // set callback handlers
  client.onConnectionLost = (code, message) => retryConnect('onConnectionLost',code, message);
  client.onMessageArrived = onMessageArrived;
  var connect = function() {
    $connect_attempt = $connect_attempt <= 0 ? 1 : $connect_attempt + 1;

    return new Promise(function($resolve, $reject) {
      let onConnect = function(context) {
        if ($connect_attempt == 0) { return console.info('onConnect called twice'); }
        
        $connect_attempt = 0;

        console.log(`MQTT: Connected to: ${context.invocationContext.host}:${context.invocationContext.port} as ${context.invocationContext.clientId}`);
        for (let topic in $subscription_map) {
          let callbacks = $subscription_map[topic];
          if (Array.isArray(callbacks) && (callbacks.length > 0)) {
            _subscribe(topic);
          }
        }

        $emit('mqtt:connected', context);
        $resolve(context)
      }

      let onFailure = () => {
        console.log('onFailure')
        retryConnect('onFailure');
        $reject();
      }

      // connect the client
      console.info('MQTT: Connecting to ', MQTT.hostname, ' as ', MQTT.clientId);
      client.connect({
          userName: MQTT.username || '',
          password: MQTT.password || '',
          useSSL: MQTT.useSSL,
          onSuccess: onConnect,
          onFailure: onFailure,
          invocationContext: {
            host: MQTT.hostname,
            port: MQTT.port,
            clientId: MQTT.clientId
          },
          keepAliveInterval: 20
        });
    });
  };

  var _subscribe = function(topic) {
    if (!connected()) {
      return console.info(`MQTT: Subscription to '${topic}' delayed due to connection is unavailable.`);
    }

    console.info(`MQTT: Subscribing to: '${topic}' - QoS: 1`);
    $emit('mqtt:subcribe', topic);
    return client.subscribe(topic, {qos: 1});
  };

  function publish(topic, message, qos) {
    topic = topic.replace(/:/g, '/');

    if(!connected()) {
      return console.warn(`MQTT: Message to '${topic}' dropped due to client is not connected.`);
    }

    let mqttmsg = new Paho.MQTT.Message(JSON.stringify({
      user: MQTT.username,
      content: message,
      title: topic,
      target: ''
    }));

    mqttmsg.destinationName = topic;
    mqttmsg.qos = Number(qos || 0);

    try {
      $emit('mqtt:publish', mqttmsg);
      client.send(mqttmsg);

      console.info(`MQTT: Message sent to: ${topic} - QoS: ${mqttmsg.qos} - Payload: ${message}`);
    } catch (e) {
      console.log('>>>>$failure', e)
    }

    return topic;
  }

  function disconnect() {
    $connect_attempt = -1;
    client.disconnect();
    $emit("mqtt:disconnect");
  }

  function subscribe(topic, callback) {
    topic = topic.replace(/:/g, '/');

    if (typeof callback !== 'function') {
      return console.warn(`MQTT: Subscribing [${topic}] without a callback function. Ignored.`);
    }

    if ($subscription_map[topic] == null) {
      $subscription_map[topic] = [];
      _subscribe(topic);
    }

    if (!Array.from($subscription_map[topic]).includes(callback)) {
      $subscription_map[topic].push(callback);
    }
    let on_destroy = () => unsubscribe(topic, callback);
    on_destroy.resubscribe = () => subscribe(topic, callback);
    on_destroy.topic = topic;
    return on_destroy;
  }

  function unsubscribe(topic, callback) {
    topic = topic.replace(/:/g, '/');

    if (Array.isArray($subscription_map[topic])) {
      let idx = $subscription_map[topic].indexOf(callback);
      if (idx !== -1) {
        $subscription_map[topic].splice(idx, 1);
      }
    }

    if (!$subscription_map[topic] || ($subscription_map[topic].length === 0)) {
      let opts = {
        onSuccess: onUnsubscribeSuccess,
        onFailure: onUnsubscribeFailure,
        invocationContext: {
          topic
        }
      };

      console.info(`MQTT: Unsubscribing from: '${topic}'`);
      $emit('mqtt:unsubscribe', topic, opts);
      client.unsubscribe(topic, opts);
      $subscription_map[topic] = undefined;
    }
  }

  return {
    connect,
    disconnect,
    publish,
    subscribe,
    unsubscribe
  };
}
