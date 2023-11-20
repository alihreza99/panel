import { combineReducers } from 'redux'
import Reducer from './../reduserslide'

const rootReducer = combineReducers({
    log_control: Reducer
})

export default rootReducer

