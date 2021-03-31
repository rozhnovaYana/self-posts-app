import {APP_LOAD, TOGGLE_BOOKED} from "../types"
const handlers = {
    [APP_LOAD]: (state, { data }) => ({ ...state, data, booked: data.filter(i=>i.booked)}),
    [TOGGLE_BOOKED]: (state, { id }) => {
        const data = state.data.map(post => {
        if (post.id === id) {
            post.booked = !post.booked
        }
        return post
    })
        return {...state, data,booked:data.filter(i=>i.booked) 
    }},
    DEFAULT:state=>state
    }
    
export const AppReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
    
}