import { settingConfig } from '@conf/config'
import { configureStore } from '@conf/redux/redux'
import React from 'react'
import { Provider } from 'react-redux'
import { compose, pure } from 'recompose'
import { PersistGate } from 'redux-persist/integration/react'
import { EnhanceAppTheme } from './appTheme'

settingConfig()
const { store, persistor } = configureStore()

const AppRedux = () => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<EnhanceAppTheme />
		</PersistGate>
	</Provider>
)

export const App = compose(pure)(AppRedux)
