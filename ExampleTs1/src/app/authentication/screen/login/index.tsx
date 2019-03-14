import * as React from "react"
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import authRedux from '../../redux'
import { AuthActionCollection } from "../../redux/action";

type Props = {
    login: AuthActionCollection['login']
}
const LoginScreen = (props: Props) => {
    const [count, setCount] = React.useState(0)
    return (
        <View>
            <Text>
                LOGIN
            </Text>
            <Button title="Login" onPress={props.login} />
        </View>
    )
}

export default connect(undefined, {
    login: authRedux.actionCollection.login
})(LoginScreen)