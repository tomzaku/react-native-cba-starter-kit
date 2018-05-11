import createMQTTConnection from "./mqtt";
import DeviceInfo from 'react-native-device-info';
import { getLinkServer } from 'AppSetting'
export const initMQTTTIFL = (bootstrap, event) => {
  const { mqttLink } = getLinkServer()
  console.log('0. bootstrap', bootstrap)
  return createMQTTConnection({
    hostname: mqttLink,
    port: 443,
    username: `tifl.auth:v1:${bootstrap.user._id}:mosquitto`,
    clientId: `mobile:${DeviceInfo.getUniqueID()}`,
    password: bootstrap.apikey,
    keepalive: 300,
    useSSL: true,
  }, event);
}

export const initMQTTLocal = (bootstrap, event) => {
  const { localhost } = getLinkServer()
  const mqttLink = localhost
  return createMQTTConnection({
    hostname: mqttLink,
    port: 9001,
    clientId: `mobile:${DeviceInfo.getUniqueID()}`,
    keepalive: 300,
    useSSL: false,
  }, event);
}