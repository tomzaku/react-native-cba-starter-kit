/**
* @providesModule AppSetting
*/

import DeviceInfo from 'react-native-device-info';

const SERVERS = {
  BETA: 'https://beta.trackitforlife.com',
  DEV: 'https://demo.trackitforlife.com',
  CERT: 'https://cert.trackitforlife.com',
  PROD: 'https://www.trackitforlife.com',
};

global.serverInUse = 'DEV';

export const APP_VERSION = '0.1.0';
export const DEVICE_TYPE = DeviceInfo.getModel().indexOf('iPad') > -1  || DeviceInfo.isTablet() ? 'tablet' : 'phone';
export const SKILL_ALEXA_NAME = 'Mango'
export const SOCKET_LINK = 'https://d067e974.ngrok.io';
export const SOCKET_LINK_CONNECTION = SOCKET_LINK + '/ui-device';

export const getLinkServer = () => {
  const serverInUse = global.serverInUse;
  const targetServer = SERVERS[serverInUse];
  const logoutLink = encodeURI(`${targetServer}/oauth/logout?no_redirect=true`);
  const loginLink = encodeURI(`${targetServer}/oauth/login`);
  const bootstrapDataLink = encodeURI(`${targetServer}/oauth/~bootstrap?max_results=10000`);
  const graphqlLink = `${targetServer}/obj/:gql`;
  const mqttLink = `${targetServer}/mqtt`.split('https://')[1]; // remove 'https//'
  const localhost = '192.168.100.105'
  return {
    serverInUse,
    targetServer,
    logoutLink,
    loginLink,
    bootstrapDataLink,
    graphqlLink,
    mqttLink,
    localhost,
  }
};

export const setServerInUse = (mode) => {
  global.serverInUse = mode;
}