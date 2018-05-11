import React, { Component } from "react";
import getRoutes from "./routes";
import { DEVICE_TYPE } from "AppSetting";
import { color, metric, font, applicationStyle } from "AppTheme";
import R from "ramda";
import Icon from "react-native-vector-icons/MaterialIcons";
import { StackNavigator } from "react-navigation";


// import DeviceInfo from 'react-native-device-info';
export const getStackRoute = (initialRouteName = "HoldingPlaceHolder") => {
  let stackRoute = {};
  const routes = getRoutes();
  Object.keys(routes).map((key, index) => {
    const {
      title,
      screen,
      headerBackgroundColor = "red",
      headerMode
    } = routes[key][DEVICE_TYPE]
      ? routes[key][DEVICE_TYPE]
      : routes[key].phone; // Default phone
    let navigationOptions;
    if (headerMode !== "none") {
      // Screen with header
      navigationOptions = navigation => ({
        title,
        headerStyle: {
          ...applicationStyle.navHeader,
          backgroundColor: headerBackgroundColor
        },
        ...navigation.navigationOptions
      });
    } else {
      navigationOptions = navigation => ({
        header: null,
        ...navigation.navigationOptions
      });
    }
    stackRoute[key] = {
      screen,
      navigationOptions
    };
  });
  return stackRoute;
};

export const StackModalNavigator = (routeConfigs, navigatorConfig) => {
  const CardStackNavigator = StackNavigator(routeConfigs, navigatorConfig);
  const modalRouteConfig = {};
  const routeNames = Object.keys(routeConfigs);
  for (let i = 0; i < routeNames.length; i++) {
    modalRouteConfig[`${routeNames[i]}Modal`] = routeConfigs[routeNames[i]];
  }
  const ModalStackNavigator = StackNavigator(
    {
      CardStackNavigator: { screen: CardStackNavigator },
      ...modalRouteConfig
    },
    {
      mode: "modal",
      // headerMode: 'none',
      navigationOptions: navigation => ({
        header: null,
        ...navigation.navigationOptions
      })
    }
  );

  // Replay screen by adding Type 'ReplaceCurrentScreen'
  //  It still not work when using NavigationAction
  // By using that only this way: this.props.navigation.dispatch({type: 'RepaceCurrentScreen' })
  const prevGetStateForActionStackNavigatorApp =
    CardStackNavigator.router.getStateForAction;
  CardStackNavigator.router.getStateForAction = (action, state) => {
    if (state && action.type === "ReplaceCurrentScreen") {
      const routes = state.routes.slice(0, state.routes.length - 1);
      routes.push(action);
      return {
        ...state,
        routes,
        index: routes.length - 1
      };
    }
    return prevGetStateForActionStackNavigatorApp(action, state);
  };

  return ModalStackNavigator;
};

