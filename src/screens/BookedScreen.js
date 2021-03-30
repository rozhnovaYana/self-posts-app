import React, { useContext } from "react"
import { StyleSheet} from "react-native"
import { DATA } from "../data"
import { PostList } from "../components/PostList"
import { AppContext } from "../context/AppContext"

export const BookedScreen = ({ navigation }) => {
    const {data}=useContext(AppContext)
    return (
        <PostList data={data.filter(post => post.booked)} navigation={navigation}/>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        
    }
})