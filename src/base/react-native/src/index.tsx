import { settingConfig } from '@conf/config'
import configureStore from '@conf/redux/index'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Context from './context'

settingConfig()
const { store, persistor } = configureStore()

const AppRedux = () => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
            	<Context />
		</PersistGate>
	</Provider>
)

export default AppRedux
