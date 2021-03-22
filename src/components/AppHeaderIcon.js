import React from "react"
import { Platform } from "react-native"
import { HeaderButton } from "react-navigation-header-buttons"
import { THEMES } from "../themes/theme"
import { Ionicons } from '@expo/vector-icons'; 


export const AppHeaderIcon = props => <HeaderButton iconSize={30} IconComponent={Ionicons} color={Platform.OS==="android"?"white":THEMES.MAIN_COLOR}{...props}/>