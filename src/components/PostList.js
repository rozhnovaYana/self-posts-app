import React, { useEffect } from "react"
import { View, FlatList, StyleSheet, Text } from "react-native"
import { Post } from "./Post"

export const PostList = ({ data, navigation }) => {
    const openPostScreen = (post) => {
        navigation.navigate("PostScreen", {
            post
        })
    }
    if (!data.length) {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.text}>Нет записей</Text>
            </View> 
        )
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
        
    },
    text: {
        fontSize: 25,
        fontFamily: "regular",
        padding:10
    }
})