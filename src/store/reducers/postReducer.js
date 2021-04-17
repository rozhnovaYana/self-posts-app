import { ADD_POST, APP_LOAD, REMOVE_POST, TOGGLE_BOOKED } from "../../types"
const initialState = {
    data: [],
    booked: [],
    loading:true
}
export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case (APP_LOAD): return ({ ...state, data: action.data, booked: action.data.filter(i => i.booked), loading:false })
        case (TOGGLE_BOOKED):
            const allPosts = state.data.map(post => {
                if (post.id === action.id) {
                    post.booked=!post.booked
                }
                return post
            })
            return ({
                ...state, data: allPosts, booked: allPosts.filter(i => i.booked)
            })
        case (REMOVE_POST):
            const data = state.data.filter(post => post.id !== action.id)
            return ({
                ...state, data, booked:data.filter(i => i.booked)
            })
        case (ADD_POST):
            return ({
                ...state, data:[action.post, ...state.data]
            })
        default:return state
    }
}