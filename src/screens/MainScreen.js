import React, { useEffect } from "react"
import { ActivityIndicator, StyleSheet, View } from "react-native"
import { PostList } from "../components/PostList"
import { useDispatch, useSelector } from "react-redux"
import {postAction} from "../store/actions/postAction"
import { THEMES } from "../themes/theme"



export const MainScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(postAction())
    }, [dispatch])
    const allPosts = useSelector(state => state.post.data)
    const loading = useSelector(state => state.post.loading)
    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator color={THEMES.MAIN_COLOR}/>
             </View>)
    }
    return (
        <PostList data={allPosts} navigation={navigation}/>
    )
}
const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    }
})