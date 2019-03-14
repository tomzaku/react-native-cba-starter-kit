import { settingConfig } from '@conf/config'
import configureStore from '@conf/redux/index'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
// import { EnhanceAppTheme } from './appTheme'
import AppRouter from '@router/router'
// import { View, Text } from 'react-native';

settingConfig()
const { store, persistor } = configureStore()

const AppRedux = () => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
            <AppRouter />
            {/* <View><Text>sads</Text></View> */}
		</PersistGate>
	</Provider>
)

export default AppRedux
