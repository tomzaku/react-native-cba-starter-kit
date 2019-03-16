import * as R from 'ramda'
import app from "@app/index"
import stackUtil from './stack'
import { createBottomTabNavigator } from "react-navigation"

type TabConfig = {
    routeKeys: string[],
    navigationOptions: any
}

const build = (tabs: TabConfig[]) => {
    const routeList = tabs.map(item => stackUtil.build(item.routeKeys, R.omit(['routeKeys'], item)))
    const route = R.zipObj(tabs.map((item, index) => `Tab${index}`), routeList)
    return {
        screen: createBottomTabNavigator(
            route,
        ),
        navigationOptions: () => ({
            header: null,
        })
    }
}

export {
    build
}