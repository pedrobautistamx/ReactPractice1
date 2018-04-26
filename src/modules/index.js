import Loading from './Loading'
import Modal from './Modal'
import DataClient from './DataClient'
import NewModul from './NewModul'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
	Loading,
	Modal,

	DataClient,
    NewModul
})

export default rootReducer
