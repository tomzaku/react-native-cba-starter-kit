import * as React from "react"
import { View, Text, Button } from "react-native";
import { NavigationProp, NavigationScreenProps } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';
import i18n from '@i18n/index'

const MainCounter = (props: NavigationScreenProps) => {
    const [count, setCount] = React.useState(0)
    return (
        <View>
            <Text>
                Number: {count}
            </Text>
            <Icon.Button
                name="facebook"
                backgroundColor="#3b5998"
            >
                Login with Facebook
            </Icon.Button>
            <Icon name="rocket" size={30} color="#900" />
            <Button title="Increasing" onPress={() => setCount(count + 1)} />
            <Button title="Go to detail" onPress={() => props.navigation.push('DetailCount')}/>
            <Button
                title={i18n.t('home.welcome', { appName: i18n.t('appName')})}
                onPress={() => {}}
            />
        </View>
    )
}

export default MainCounter