import { combineReducers } from 'redux'
import Reducer from '../components/reduserslide'

const rootReducer = combineReducers({
    auth: Reducer
})

export default rootReducer

