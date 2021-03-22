import React, {useLayoutEffect} from "react"
import { View, Text, StyleSheet, ScrollView, Image, Button, Alert } from "react-native"
import { AppButton } from "../components/ui/AppButton";
import { THEMES } from "../themes/theme";
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import {AppHeaderIcon} from "../components/AppHeaderIcon"

export const PostScreen = ({ route, navigation }) => {
    const { post } = route.params;
    const iconBooked=post.booked?'star':'star-outline'
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                                <Item title="Add" iconName={iconBooked} onPress={() => alert('search')} />
                            </HeaderButtons>
                        )
        })
    }, [navigation])
    const removeHandler = () => {
        Alert.alert(
            "Delete",
            "Are you sure?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                { text: "OK",style:"destructive",onPress: () => {} }
            ]
    );
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