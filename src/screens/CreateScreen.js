import React, { useState } from "react"
import { View, Text, StyleSheet,TextInput, ScrollView, Keyboard, Button } from "react-native"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"
import { useDispatch } from "react-redux"
import { THEMES } from "../themes/theme"
import { addPost } from "../store/actions/postAction"
import { ImageTake } from "../components/ImageTake"

export const CreateScreen = ({navigation}) => {
    const [value, setValue] = useState("")
    const [img, setImg]=useState("")
    const dispatch = useDispatch()
    const createNewPost = () => {
        const post = {
            img,
            text: value,
            date: new Date().toJSON(),
            booked: false
        }
        dispatch(addPost(post))
        navigation.navigate("Main")
        setValue("")
    }
    const pickImageHandler = uri => {
        setImg(uri)
    }
    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
                <View style={styles.center}>
                    <Text style={styles.text}>Create new post</Text>
                    <TextInput
                        style={styles.textInput}
                        multiline
                        value={value}
                        placeholder="Enter text"
                        onChangeText={setValue}
                    />
                    <ImageTake pickUri={pickImageHandler} />
                    <View style={styles.btn}>
                         <Button title="Create" onPress={createNewPost}  disabled={!value || !img} width="40%"/>
                    </View>
                   
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    textInput: {
        padding: 15,
        marginBottom: 10,
        borderColor: THEMES.MAIN_COLOR,
        borderRadius: 10,
        borderWidth: 2
    },
    img: {
        width: '100%',
        height: 200,
        marginVertical:15
    },
    text: {
        fontSize: 25,
        color: THEMES.MAIN_COLOR,
        fontFamily: "bold",
        marginVertical: 10,
        paddingStart:10
    },
    btn: {
        width: "100%",
        justifyContent: "center",
        alignItems:"center"
    }
})