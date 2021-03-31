import { APP_LOAD } from "../../types"
const initialState = {
    data: [],
    booked:[]
}
export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case (APP_LOAD): return ({ ...state, data: action.data })
        default:return state
    }
}