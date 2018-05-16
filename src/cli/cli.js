const { build, printCommands, printWtf, print } = require('gluegun')
const { isNil, isEmpty } = require('ramda')
const PrettyError = require('pretty-error')
const pe = new PrettyError()
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const R = require('ramda')

async function help() {
  print.error('Try this: zkrn init <nameApp>')
}
async function init(nameProject) {
  try {
    if (!nameProject) throw 'Please fill your name app. For ex: zkrn init myApp'
    print.info('FILE BIN ' + __dirname)
    print.info('DEFAULT FOLDER ' + process.cwd())
    print.info(`Creating new react-native called ${nameProject}... Will take 5 minutes`)
    await installReactNative(nameProject)
    print.info('Creating react-native successfully')
    print.info('Now install dependence package')
    await installPackageDependence(nameProject)
    print.info('Copying base component')
    await copyBaseToProject(nameProject)
     // Link package
    print.info('Linking package...')
    await linkingPackage(nameProject)
    print.info('Done!. Run IOS now')
  } catch(err) {
    print.error(err)
  }
}

async function runIOS() {
  await exec('react-native run-ios')
}
const PascalCase = (nameProject) => nameProject[0].toUpperCase() + nameProject.slice(1)

async function installReactNative(nameProject) {
  // check exist rn
  const { stdout, stderr } = await exec(`cd ${process.cwd()}/ && react-native -v`)
  if (stdout.indexOf('n/a') > 0) {
    await exec(`react-native init ${nameProject}`);
  }
  print.warning(`Your folder name ${nameProject} is existed R-N`);
}
async function copyIndexFile(nameProject) {
  print.info('Copy index.js file')
  const indexFile  = `import { AppRegistry } from 'react-native';
  import App from './src/mobile';
  
  AppRegistry.registerComponent('${nameProject}', () => App);
  `
  await exec(`echo "${indexFile}\" > ${process.cwd()}/${nameProject}/index.js`)

}
async function copyBaseToProject(nameProject) {
  await exec(`cp -r ${__dirname}/../base/src ${process.cwd()}/${nameProject}/src` );

  // Copy Index file
  await copyIndexFile(nameProject)
  await copyAppDelegate(nameProject)
  await copyBin(nameProject)
}

async function installPackage(nameProject, namePackage) {
  print.info(`Installing package: ${namePackage}`)
  await exec(`cd ${process.cwd()}/${nameProject} && yarn add ${namePackage}`)
}

async function copyBin(nameProject) {
  print.info('Copy bin and Makefile')
  const changeIp = String.raw`#!/usr/bin/env python3
import re
import socket

s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.connect((\"8.8.8.8\", 80))
ip = s.getsockname()[0]
s.close()

FILE_IOS = './ios/${nameProject}/AppDelegate.m'
with open(FILE_IOS) as f:
    content = f.read()
content_new = re.sub(r'(http:\/\/).*\/', r'http://' + ip + ':8081/', content)

f = open(FILE_IOS, 'w')
f.write(content_new)

print('Change IP to ' + ip + ' successfuly')
  `
  await exec(`mkdir ${process.cwd()}/${nameProject}/bin && echo "${changeIp}" > ${process.cwd()}/${nameProject}/bin/x-change-ip`)
  await exec(`cp  ${__dirname}/../base/Makefile ${process.cwd()}/${nameProject}/`)
}
async function copyAppDelegate(nameProject) {
  print.info('Copy App Delegate...')
  const appDelegate = String.raw`
  /**
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */

  #import "AppDelegate.h"

  #import <React/RCTBundleURLProvider.h>
  #import <React/RCTRootView.h>

  @implementation AppDelegate

  - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
  {
    NSURL *jsCodeLocation;
    #ifdef DEBUG
      jsCodeLocation = [NSURL URLWithString:@"http://192.168.100.122:8081/index.bundle?platform=ios&dev=true"];
    #else
      jsCodeLocation = [[NSBundle mainBundle] URLWithStringLForResource:@"main" withExtension:@"jsbundle"];
    #endif
    // jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
    //  jsCodeLocation = [NSURL URLWithString:@"http://192.168.100.122:8081/index.bundle?platform=ios&dev=true"];
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                        moduleName:@"${nameProject}"
                                                initialProperties:nil
                                                    launchOptions:launchOptions];
    rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

    self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
    UIViewController *rootViewController = [UIViewController new];
    rootViewController.view = rootView;
    self.window.rootViewController = rootViewController;
    [self.window makeKeyAndVisible];
    return YES;
  }
  @end
  `
  await exec(`echo '${appDelegate}' > ${process.cwd()}/${nameProject}/ios/${nameProject}/AppDelegate.m && chmod +x ${process.cwd()}/${nameProject}/bin/x-change-ip`)
}

async function installPackageDependence(nameProject) {
  const dependences = [
    // GENERAL
    'uuid',
    'ramda',
    'axios',
    'moment',
    'randomcolor',
    // REDUX
    'redux',
    'normalizr',
    'react-redux',
    'redux-saga',
    'redux-thunk',
    'reselect',
    'seamless-immutable',
    'redux-persist',
    'redux-form',
    // UI
    'react-native-vector-icons',
    'react-consola',
    'react-native-animatable',
    'react-native-modal-datetime-picker',
    'react-native-shimmer-placeholder',
    'react-native-spinkit',
    'react-native-device-info',
    'react-native-keyboard-aware-scroll-view',
    'react-native-orientation',
    'react-native-image-picker',
    'react-native-circular-action-menu',
    'react-native-action-button',
    'react-native-elements',
    'react-navigation',
    'react-native-scrollable-tab-view',
    'react-native-datepicker',
    'react-native-linear-gradient',
    'react-native-material-bottom-navigation-performance',
    'react-native-i18n',
  ]
  for (let package of dependences) {
    await installPackage(nameProject, package);
  }
 
}
async function linkingPackage(nameProject) {
  await exec(`cd ${process.cwd()}/${nameProject} && react-native link`)
} 

async function remove(nameProject) {
  if(!nameProject) {
    print.error('Try this zkrn remove <nameApp>')
  }
  print.info(`Removing ${nameProject}... Will take 5 minutes`)
  if (nameProject) {
    const { stdout, stderr } = await exec(`rm -rf ${process.cwd()}/${nameProject}`);
    print.info('Remove successfully!')
  }

}

module.exports = async function run (argv) {
  // create a runtime
  print.info('Starter kit generation begin....')
  const param = argv[2]
  const nameProject = argv[3]
  switch (param) {
    case 'init': {
      await init(nameProject)
      break;
    }
    case 'remove': {
      print.info('Removing')
      await remove(nameProject)
      break;
    }
    default:
      help()
  }
}