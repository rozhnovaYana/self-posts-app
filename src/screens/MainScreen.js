import React, { useContext, useEffect } from "react"
import { StyleSheet } from "react-native"
import { DATA } from "../data"
import { PostList } from "../components/PostList"
import { AppContext } from "../context/AppContext"


export const MainScreen = ({ navigation }) => {
    const {data, loadData}=useContext(AppContext)
    useEffect(() => {
        loadData()
    }, [])
    return (
        <PostList data={data} navigation={navigation}/>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        
    }
})