import React, { useContext } from "react"
import { StyleSheet} from "react-native"
import { DATA } from "../data"
import { PostList } from "../components/PostList"
import { AppContext } from "../context/AppContext"

export const BookedScreen = ({ navigation }) => {
    const { booked} = useContext(AppContext)

    return (
        <PostList data={booked} navigation={navigation}/>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        
    }
})