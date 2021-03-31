import React from "react"
import { StyleSheet} from "react-native"
import { PostList } from "../components/PostList"
import { useSelector } from "react-redux"

export const BookedScreen = ({ navigation }) => {
    const booked=useSelector(state=>state.post.booked)
    return (
        <PostList data={booked} navigation={navigation}/>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        
    }
})