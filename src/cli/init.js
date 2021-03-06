const chalk = require('chalk')
const PrettyError = require('pretty-error')
const pe = new PrettyError()
const util = require('util');
const exec = util.promisify(require('child_process').exec);
var fs = require('fs');
var cs = require('change-case')

const localIps = require('./helper/getIp')
const check = require('./check')
const appDir = (nameProject) => `${process.cwd()}/${nameProject}`
const libDir = `../../`
const baseDir = `${__dirname}/../base/react-native`
const log = console.log
const localIp = localIps.length > 0 ? localIps[0] : '192.168.100.122'

async function copyAppDelegate(nameProject) {
  log(chalk.blue('Copy App Delegate'))
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
      jsCodeLocation = [NSURL URLWithString:@"http://${localIp}:8081/index.bundle?platform=ios&dev=true"];
    #else
      jsCodeLocation = [[NSBundle mainBundle] URLWithStringLForResource:@"main" withExtension:@"jsbundle"];
    #endif
    // jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
    //  jsCodeLocation = [NSURL URLWithString:@"http://${localIp}:8081/index.bundle?platform=ios&dev=true"];
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
  await exec(`echo '${appDelegate}' > ${appDir(nameProject)}/ios/${nameProject}/AppDelegate.m`)
}

async function linkingPackage(nameProject) {
  // Linking crash at here. may be some package in list have problem
  const linkPackages = [
    'react-native-localize',
    'react-native-device-info',
    'react-native-gesture-handler',
    'react-native-vector-icons',
  ]
  for (let package of linkPackages) {
    await exec(`cd ${appDir(nameProject)} && react-native link ${package}`)
  }
}
async function copyIndexFile(nameProject) {
  log(chalk.blue('Copy index.js file'))
  const indexFile  = `/**
  * @format
  */
 
 import {AppRegistry} from 'react-native';
 import App from './src/index';
 import {name as appName} from './app.json';
 
 AppRegistry.registerComponent(appName, () => App);`
  await exec(`echo "${indexFile}\" > ${appDir(nameProject)}/index.js`)

}
async function copyZkrnConfig(nameProject) {
  const zkrn = {
    "version": require(`${libDir}/package.json`).version
  }
  await exec(`echo '${JSON.stringify(zkrn)}' > ${appDir(nameProject)}/.zkrn`)
}


async function copyBaseToProject(nameProject) {
  await exec(`cp -rf ${baseDir}/* ${appDir(nameProject)}/` );

  // Copy Index file
  await copyIndexFile(nameProject)
  // await copyAppDelegate(nameProject)
  await copyBin(nameProject)
  await copyZkrnConfig(nameProject)
}

async function installPackage(nameProject, namePackage) {
  log('Installing package: ' + chalk.green.underline.bold(`${namePackage}`))
  await exec(`cd ${process.cwd()}/${nameProject} && yarn add ${namePackage}`)
}

async function installPackageDependence(nameProject) {
  const dependences = [
    // GENERAL
    'ramda',
    'i18n-js',
    'react-native-localize',
    'react-native-device-info',
    'react-native-gesture-handler',
    // REDUX
    'redux',
    'react-redux',
    'reselect',
    'redux-persist',
    'redux-packaged',
    'typesafe-actions',
    // UI
    'react-native-elements',
    'react-navigation',
    'react-native-vector-icons',
    // Type
    '@types/i18n-js',
    '@types/react-native-vector-icons',
    '@types/react-navigation',
    '@types/react-redux',

  ]
  for (let package of dependences) {
    await installPackage(nameProject, package);
  }
 
}

async function copyBin(nameProject) {
  log(chalk.blue('Copy bin and Makefile'))
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
  await exec(`echo "${changeIp}" > ${appDir(nameProject)}/bin/x-change-ip && chmod +x ${appDir(nameProject)}/bin/x-change-ip`)
  // await exec(`cp  ${baseDir}/Makefile ${appDir(nameProject)}/`)
}

async function installReactNative(nameProject) {
  // check exist rn
  try {
    
    if (fs.existsSync(`${appDir(nameProject)}`)) {
      const { stdout, stderr } = await exec(`cd ${appDir(nameProject)}/ && react-native -v`)
      // if (stdout.indexOf('n/a') > 0) { //if react-native is'nt exist
      //   await exec(`react-native init ${nameProject}`);
      // }
      // else {
        throw "ERR> Your folder name ${nameProject} is existed R-N\nGO> Change the name App"
      // }
      return false;
    } else {
      await exec(`react-native init ${nameProject} --template typescript`);
      return true;
    }
  } catch (err) {
    log(chalk.red.bold('err'))
    return false;
  }
}

const printDivider = () => {
  log(chalk.cyan("==============================================="))

}

async function init(name) {
  try {
    const isInstalledDependence = await check()
    if (!name) throw 'Please fill your name app. For ex: zkrn init myApp'
    const nameProject = cs.camelCase(name) 
    // log(chalk.yellow(`FILE BIN: ${__dirname}`))
    // log(chalk.cyan('FILE BIN ' + __dirname))
    // log(chalk.cyan('DEFAULT FOLDER ' + process.cwd()))
    printDivider()
    log(chalk.blueBright(`Creating new react-native called ${nameProject}... Will take 5 minutes`))
    const status = await installReactNative(nameProject)
    if (!status) {
      throw 'See error on top'
    }
    log(chalk.green(`Initial react-native successfully`))

    printDivider()
    log(chalk.blueBright(`Now install alternative package`))
    await installPackageDependence(nameProject)
    log(chalk.green(`Installed lib successfully`))
 
    printDivider()
    log(chalk.blueBright('Copying base component'))
    await copyBaseToProject(nameProject)
     // Link package
    printDivider()
    log(chalk.blueBright('Linking package...'))
    await linkingPackage(nameProject)
    printDivider()
    log(chalk.cyan(`> cd ${nameProject}`))
    log('Runing ios')
    log(chalk.cyan(`> make ios`))
    log('Or android')
    log(chalk.cyan(`> make android`))
    printDivider()
    log(chalk.green('Done!. Have a nice day!'))
  } catch(err) {
    log(chalk.red(pe.render(err)))
  }
}

module.exports = init