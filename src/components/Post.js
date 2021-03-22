import React from "react"
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity } from "react-native"

export const Post = ({ post, openPostScreen }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={()=>openPostScreen(post)}>
            <View style={styles.wrapper}>
                <ImageBackground source={{uri:post.img}} style={styles.image}>
                    <View style={styles.textWrapper}>
                        <Text style={styles.text}>
                            {new Date(post.date).toLocaleDateString()}
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        marginTop: 10,
        paddingHorizontal: 10
    },
    image: {
        width: "100%",
        height:200
    },
    text:{
        fontFamily: "regular",
        color:'white'
    },
    textWrapper: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: "100%",
        alignItems:"center"
        
    }
})