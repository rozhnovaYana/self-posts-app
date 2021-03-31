import React, { useEffect } from "react"
import { StyleSheet } from "react-native"
import { PostList } from "../components/PostList"
import { useDispatch, useSelector } from "react-redux"
import {postAction} from "../store/actions/postAction"



export const MainScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(postAction())
    }, [dispatch])
    const allPosts=useSelector(state=>state.post.data)
    return (
        <PostList data={allPosts} navigation={navigation}/>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        
    }
})