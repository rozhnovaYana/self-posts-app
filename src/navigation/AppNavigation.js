import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen } from "../screens/MainScreen"
import { AboutScreen } from "../screens/AboutScreen"
import { BookedScreen } from "../screens/BookedScreen"
import { CreateScreen } from "../screens/CreateScreen"
import { PostScreen } from "../screens/PostScreen"
import { Platform } from "react-native"
import { THEMES } from "../themes/theme"
import { AppHeaderIcon } from "../components/AppHeaderIcon"
import { Ionicons } from '@expo/vector-icons';
import {HeaderButtons, Item} from "react-navigation-header-buttons"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab=createBottomTabNavigator()
const Stack = createStackNavigator()
const MainNavigation = () => {
    return (
            <Stack.Navigator initialRouteName="MainScreen" screenOptions={{
                title: "My App",
                headerStyle: {
                    backgroundColor: Platform.OS==="android"?THEMES.MAIN_COLOR:"white"
                },
                headerTintColor: Platform.OS==="android"?"white":THEMES.MAIN_COLOR,
                headerTitleStyle: {
                    color: Platform.OS==="android"?"white":THEMES.MAIN_COLOR,
                    fontFamily:"regular"
                }
                
            }}>
                <Stack.Screen name="MainScreen" component={MainScreen} options={{
                    headerRight: () => (
                            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                                <Item title="Add" iconName="camera" onPress={() => alert('search')} />
                            </HeaderButtons>
                    ),
                    headerLeft: () => (
                            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                                <Item title="menu" iconName="ios-menu-sharp" onPress={() => alert('search')} />
                            </HeaderButtons>
                    )
                }}/>
                <Stack.Screen name="AboutScreen" component={AboutScreen} />
                <Stack.Screen name="BookedScreen" component={BookedScreen} />
                <Stack.Screen name="CreateScreen" component={CreateScreen} />
                <Stack.Screen name="PostScreen"
                    component={PostScreen}
                    //options - либо обьект, либо функция, которая возвращает обьект
                    options={({ route }) => ({
                        title: route.params.post.text
                    })} />
            </Stack.Navigator>
    )
}
const BookedNavigation = () => {
    return(
    <Stack.Navigator initialRouteName="BookedScreen" screenOptions={{
                title: "Booked",
                headerStyle: {
                    backgroundColor: Platform.OS==="android"?THEMES.MAIN_COLOR:"white"
                },
                headerTintColor: Platform.OS==="android"?"white":THEMES.MAIN_COLOR,
                headerTitleStyle: {
                    color: Platform.OS==="android"?"white":THEMES.MAIN_COLOR,
                    fontFamily:"regular"
                }
                
            }}>
                <Stack.Screen name="BookedScreen" component={BookedScreen} options={{
                    headerLeft: () => (
                            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                                <Item title="menu" iconName="ios-menu-sharp" onPress={() => alert('search')} />
                            </HeaderButtons>
                    )
                }}/>
                <Stack.Screen name="PostScreen"
                    component={PostScreen}
                    //options - либо обьект, либо функция, которая возвращает обьект
                    options={({ route }) => ({
                        title: route.params.post.text
                    })} />
        </Stack.Navigator>
    )
}
export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                activeTintColor: THEMES.MAIN_COLOR
            }}>
                <Tab.Screen name="Main" component={MainNavigation} options={{ tabBarIcon: ({ color }) => <Ionicons name="md-folder-open-sharp" size={24} color={color}/>}}/>
                <Tab.Screen name="Booked" component={BookedNavigation} options={{tabBarIcon:({color})=><Ionicons name="ios-star-sharp" size={24} color={color} />}} />
            </Tab.Navigator>
        </NavigationContainer>
        
    )
}
