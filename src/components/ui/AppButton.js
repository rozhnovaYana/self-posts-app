import React from "react"
import { TouchableOpacity, View, Text, StyleSheet } from "react-native"
import {THEMES} from "../../themes/theme"

export const AppButton = ({children, onPress, style, color=THEMES.BUTTON_COLOR}) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.center}>
            <View style={{...styles.wrapper, backgroundColor:color, ...style}}>
                <Text style={styles.text}>
                    {children}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    center: {
        justifyContent: "center",
        alignItems: "center"
    },
    wrapper: {
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "70%"
    },
    text: {
        fontFamily: "regular",
        fontSize: 18,
        color:"white"
    }
})