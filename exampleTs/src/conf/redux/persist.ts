import storage from 'redux-persist/lib/storage'
import { transformPersist } from './transformPersist'

export const PERSIST_CONFIG = {
	active: true,
	reducerVersion: '1.0',
	storeConfig: {
		storage,
		key: 'primary',
		blacklist: ['login', 'search', 'nav'],
		// Optionally, just specify the keys you DO want stored to persistence.
		// An empty array means 'don't store any reducers' -> infinitered/ignite#409
		// whitelist: [],
		transforms: [transformPersist],
	},
}
