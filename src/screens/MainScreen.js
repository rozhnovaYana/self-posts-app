import React from "react"
import { StyleSheet } from "react-native"
import { DATA } from "../data"
import { PostList } from "../components/PostList"


export const MainScreen = ({ navigation }) => {
    return (
        <PostList data={DATA} navigation={navigation}/>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        
    }
})