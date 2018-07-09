import React from 'react'
import { Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { compose, pure } from 'recompose'
import { PersistGate } from 'redux-persist/integration/react'
import { configureStore } from './conf/redux/redux'

const { store, persistor } = configureStore()
const AppScreen = () => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<Text>
				asdsa
			</Text>
		</PersistGate>
	</Provider>
)
export const App = compose(pure)(AppScreen)
