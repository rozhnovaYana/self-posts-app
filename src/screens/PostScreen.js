import React, {useCallback, useEffect, useLayoutEffect} from "react"
import { View, Text, StyleSheet, ScrollView, Image, Button, Alert } from "react-native"
import { AppButton } from "../components/ui/AppButton";
import { THEMES } from "../themes/theme";
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import { AppHeaderIcon } from "../components/AppHeaderIcon"
import { useDispatch, useSelector } from "react-redux"
import { toggleBooked, removePost } from "../store/actions/postAction"
import { MainScreen } from "./MainScreen";

export const PostScreen = ({ route, navigation }) => {
    const{post}=route.params
    const data = useSelector(state => state.post.data.find(item => item.id === route.params.post.id))
    const dispatch = useDispatch()
    const booked = useSelector(state => state.post.booked.some(item => item.id === post.id))
    const toggleHandler = () => {
        dispatch(toggleBooked(post.id))
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                                <Item title="Add" iconName={booked ? 'star' : 'star-outline'} onPress={toggleHandler} />
                            </HeaderButtons>
                        )
        })
    }, [navigation, booked])
    const removeHandler = () => {
        Alert.alert(
            "Delete",
            "Are you sure?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "delete", style: "destructive", onPress: () => {
                        navigation.navigate(MainScreen)
                        dispatch(removePost(post.id))
                        
                }}
            ]
    );
    }
    if (!data) {
        return null
    }
    

    return (
        <View>
            <Image source={{ uri: post.img }} style={styles.image} />
            <View style={styles.textWrapper}>
                <Text style={styles.text}>{post.text}</Text>
            </View>
            <AppButton onPress={removeHandler} color={THEMES.DANGER_COLOR}>Delete</AppButton>
        </View> 
    )
}
const styles = StyleSheet.create({
    image: {
        width: "100%",
        height:200
    },
    textWrapper: {
        paddingLeft: 30,
        paddingVertical:20
    },
    text: {
        fontFamily: "regular",
        fontSize: 20,
        
    }
})