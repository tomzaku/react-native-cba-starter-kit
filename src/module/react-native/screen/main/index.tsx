import * as React from "react"
import { View, Text, Button } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { withStyles, WithStyles } from "@theme/index";
import style from './index.style'

type Props = NavigationScreenProps & WithStyles<typeof style>

const MainSandBox = (props: Props) => {
    const [count, setCount] = React.useState(0)
    return (
        <View>
            <Text>
                SandBox Number: {count}
            </Text>
            <Button title="Increasing" onPress={() => setCount(count + 1)} />
        </View>
    )
}

export default withStyles(style)(MainSandBox)