import * as React from "react"
import { View, Text, Button } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import i18n from '@i18n/index'
import style from './index.style'
import { withStyles, WithStyles } from "@theme/index";

type Props = NavigationScreenProps & WithStyles<typeof style>

const MainCounter = (props: Props) => {
    const [count, setCount] = React.useState(0)
    return (
        <View style={props.styles.container}>
            <Text style={props.styles.countingText}>
                Number: {count}
            </Text>
            <Button title="Increasing" onPress={() => setCount(count + 1)} />
            <Button title="Go to detail" onPress={() => props.navigation.push('DetailCount')}/>
            <Text>
                {i18n.t('home.welcome', { appName: i18n.t('appName')})}
            </Text>
        </View>
    )
}

export default withStyles(style)(MainCounter)