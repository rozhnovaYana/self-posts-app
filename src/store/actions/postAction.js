import { DATA } from "../../data"
import { APP_LOAD, REMOVE_POST, TOGGLE_BOOKED } from "../../types"

export const postAction = () => {
    return {
        type: APP_LOAD,
        data:DATA
    }
}

export const toggleBooked = (id) =>{
    return{
        type: TOGGLE_BOOKED,
        id
    }
}
export const removePost = (id) => {
    return {
        type: REMOVE_POST,
        id
    }
}