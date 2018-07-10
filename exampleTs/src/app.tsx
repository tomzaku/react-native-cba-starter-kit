import { settingConfig } from '@conf/config'
import { configureStore } from '@conf/redux/redux'
import { AppRouter } from '@router/router'
import React from 'react'
import { Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { compose, pure } from 'recompose'
import { PersistGate } from 'redux-persist/integration/react'

settingConfig()
const { store, persistor } = configureStore()

const AppScreen = () => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<AppRouter />
		</PersistGate>
	</Provider>
)

export const App = compose(pure)(AppScreen)
