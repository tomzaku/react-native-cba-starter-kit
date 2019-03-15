import app from "@app/index";
import stackUtil from './stack';
import { createBottomTabNavigator } from "react-navigation";


const build = (tabs: (string | string[])[]) => {
    // const 

    // MainTab: createBottomTabNavigator(R.pick(['MainCount', 'Sample'], app.route))
    
    return createBottomTabNavigator(tabs.map(item => ({
        
    }) ))
}

export {
    build
}