import React from 'react'
import { View, Text } from "react-native";
import { NavigationScreenProps } from 'react-navigation';


type Props = NavigationScreenProps

const TabProfile = (props: Props) => {
    return (
        <View>
             <Text>
                Single Profile
            </Text>
        </View>
    )
}

export default TabProfile