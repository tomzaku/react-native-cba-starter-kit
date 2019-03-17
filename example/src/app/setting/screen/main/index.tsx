import * as React from "react"
import { View, Text, Button } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import reduxUtil from '../../redux'
import { SettingIntialState } from "../../redux/reducer";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect'

type StorageProps = {
    updateLanguage: typeof reduxUtil.actionCollection.updateLanguage,
    switchTheme: typeof reduxUtil.actionCollection.switchTheme,
    languageTag: SettingIntialState['languageTag'],
    themeMode: SettingIntialState['themeMode'],
}
type Props = NavigationScreenProps & StorageProps & {}

const MainSample = (props: Props) => {
    console.log('>>PRops', props, reduxUtil)
    return (
        <View>
            <Text>
                {props.languageTag}
                {props.themeMode}
            </Text>
            <Button
                title={'Switch Language en <-> de'}
                onPress={() => props.updateLanguage(props.languageTag === 'en' && 'de' || 'en')}    
            />
            <Button 
                title={'Switch theme'}
                onPress={() => props.switchTheme()}
                />
        </View>
    )
}

const mapStateToProps = createStructuredSelector({
    languageTag: reduxUtil.selector.getLanguageTag,
    themeMode: reduxUtil.selector.getThemeMode,
})

const mapActionToProps = {
    updateLanguage: reduxUtil.actionCollection.updateLanguage,
    switchTheme: reduxUtil.actionCollection.switchTheme
}

export default connect(mapStateToProps, mapActionToProps)(MainSample)