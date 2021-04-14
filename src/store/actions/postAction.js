
import { ADD_POST, APP_LOAD, REMOVE_POST, TOGGLE_BOOKED } from "../../types"

export const postAction = () => {
    return {
        type: APP_LOAD,
        data:[]
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
export const addPost = (post) =>{
    post.id = new Date().toJSON()
    return {
        type: ADD_POST,
        post
    }
}