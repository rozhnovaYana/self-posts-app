import { combineReducers, createStore, applyMiddleware } from "redux"
import { postReducer } from "./reducers/postReducer"
import ReduxThunk from 'redux-thunk'

const rootReducer = combineReducers({
   post: postReducer
})
export default createStore(rootReducer, applyMiddleware(ReduxThunk))