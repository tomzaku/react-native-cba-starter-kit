import React from 'react'
import { View, Button, Text } from "react-native";
import { NavigationScreenProps } from 'react-navigation';


type Props = NavigationScreenProps

const TabProfile = (props: Props) => {
    return (
        <View>
            <Text>
                This is Profile
            </Text>
            <Button title="Go to Detail" onPress={() => props.navigation.navigate('DetailProfile')} />
            <Button title="Setting" onPress={() => props.navigation.navigate('SettingMain')} />
        </View>
    )
}

export default TabProfile