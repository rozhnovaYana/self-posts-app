import React from "react"
import { View, StyleSheet, FlatList, Text } from "react-native"
import { DATA } from "../data"
import {Post} from "../components/Post"

export const BookedScreen = ({ navigation }) => {
    const openPostScreen = (post) => {
        navigation.navigate("PostScreen", {
            post
        })
    }
    return (
        <View style={styles.wrapper}>
            <FlatList
                data={DATA.filter(post=>post.booked)}
                keyExtractor={post => post.id.toString()}
                renderItem={({ item }) => <Post post={item} openPostScreen={openPostScreen}/>}
            />      
        </View> 
    )
}
const styles = StyleSheet.create({
    wrapper: {
        
    }
})