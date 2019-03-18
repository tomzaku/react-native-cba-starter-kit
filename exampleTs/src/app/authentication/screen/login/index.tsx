import * as React from "react"
import { View, Text, Image, ImageStyle } from "react-native";
import { connect } from "react-redux";
import authRedux from '../../redux'
import { AuthActionCollection } from "../../redux/action";
import { Button } from 'react-native-elements';
import style from './style'
import { withStyles, WithStyles } from "@theme/index";

type StorageProps = {
    login: AuthActionCollection['login']
}

type Props = StorageProps & WithStyles<typeof style>

const LoginScreen = (props: Props) => {
    return (
        <View style={props.styles.container}>
            <Image source={require('../../assets/logo.png')} style={props.styles.image as ImageStyle} />
            <Button title="Login" onPress={props.login} style={props.styles.button} />
        </View>
    )
}

export default connect(undefined, {
    login: authRedux.actionCollection.login
})(withStyles(style)(LoginScreen))