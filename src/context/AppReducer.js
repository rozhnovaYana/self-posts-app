import {APP_LOAD} from "../types"
const handlers = {
    [APP_LOAD]: (state, { data }) => ({ ...state, data }),
    DEFAULT:state=>state
    }
    
export const AppReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
    
}