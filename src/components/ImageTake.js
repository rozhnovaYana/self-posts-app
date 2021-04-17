import * as ImagePicker from 'expo-image-picker';
import React, { useState, useEffect } from 'react';
import { Platform, View, StyleSheet, Button, Image } from "react-native"
import {AppButton} from "../components/ui/AppButton"


export const ImageTake = ({pickUri}) => {
    useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraPermissionsAsync()
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
    }, []);
    const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      pickUri(result.uri)
    } 
  };
    return (
      <View style={styles.wrapper}>
          <AppButton onPress={pickImage} >
                          Take a photo
                      </AppButton>
          </View>
    );
}
const styles = StyleSheet.create({
    wrapper: {
    marginBottom: 10,
    display: 'flex',
      alignItems:"center"
    }
})