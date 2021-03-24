import React from "react"
import { View, FlatList, StyleSheet } from "react-native"
import {Post} from "./Post"
export const PostList = ({ data, navigation }) => {
    const openPostScreen = (post) => {
        navigation.navigate("PostScreen", {
            post
        })
    }
    return (
        <View style={styles.wrapper}>
            <FlatList
                data={data}
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