import React from 'react'
import { StackNavigatorConfig, createStackNavigator, createBottomTabNavigator } from "react-navigation";
import app from "@app/index";
import * as tabUtil from './util/tab'
import Icon from 'react-native-vector-icons/FontAwesome';


type IconProps = {
    focused: boolean,
    horizontal: boolean,
    tintColor: string,
}

const setupMainRoute = (stackConfig?: StackNavigatorConfig) => {
    return createStackNavigator(
        {
            MainTab: tabUtil.build([
                {
                    routeKeys: ['MainCount', 'DetailCount'],
                    navigationOptions: () => ({
                        title: 'Counting',
                        tabBarIcon: (iconProps: IconProps) => {
                            return  <Icon name="rocket" size={30} color={iconProps.tintColor}/>
                        }
                    })
                },
                {
                    routeKeys: ['SampleMain'],
                    navigationOptions: () => ({
                        title: 'SampleMain',
                    })
                },
                {
                    routeKeys: ['MainProfile'],
                    navigationOptions: () => ({
                        title: 'Profile',
                    })
                }
            ]),
            ...app.route
        },
        {
            initialRouteKey: 'MainTab',
            ...stackConfig
        }
    )
}
export default setupMainRoute()