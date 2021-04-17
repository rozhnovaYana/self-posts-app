
import { DB } from "../../db"
import * as FileSystem from 'expo-file-system';

import { ADD_POST, APP_LOAD, REMOVE_POST, TOGGLE_BOOKED } from "../../types"

export const postAction = () => {
    return async dispatch => {
        const posts = await DB.load()
        dispatch({
            type: APP_LOAD,
            data:posts
        })
    } 
}

export const toggleBooked = (post) => {
    return async dispatch => {
       await DB.toggleBooked(post)
        dispatch({
            type: TOGGLE_BOOKED,
            id:post.id
        })
    }
    
}
export const removePost = (id) => {
    return async dispatch => {
        await DB.removePost(id)
        dispatch({
            type: REMOVE_POST,
            id
        })
    }
    
}
export const addPost = (post) =>{
    return async dispatch => {
        const fileName = post.img.split("/").pop()
        const newPath = FileSystem.documentDirectory + fileName
        try {
            await FileSystem.moveAsync({
                to: newPath,
                from: post.img
            })
        } catch(e) {
            console.log("Error", e)
        }
        const data = { ...post, img: newPath }
        const id = await DB.addPost(data)
        data.id=id
        dispatch({
            type: ADD_POST,
            post:data
        })
    } 
}