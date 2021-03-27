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
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer=createDrawerNavigator()
//в зависимости от платформі делаем разные табы
const Tab = Platform.OS === "android" ? createMaterialBottomTabNavigator() : createBottomTabNavigator()
const Stack = createStackNavigator()
//создадим объект с общими опциями для экранов
const options = {
    headerStyle: {
                    backgroundColor: Platform.OS==="android"?THEMES.MAIN_COLOR:"white"
                },
    headerTintColor: Platform.OS==="android"?"white":THEMES.MAIN_COLOR,
    headerTitleStyle: {
        color: Platform.OS==="android"?"white":THEMES.MAIN_COLOR,
        fontFamily:"regular"
    }
}
const menu =  (navigation) => (
                            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                                <Item title="menu" iconName="ios-menu-sharp" onPress={() => navigation.toggleDrawer()} />
                            </HeaderButtons>
                    )

//
const MainNavigation = ({navigation}) => {
    return (
            <Stack.Navigator initialRouteName="MainScreen" screenOptions={{
                title: "My App",
                ...options
                
            }}>
                <Stack.Screen name="MainScreen" component={MainScreen} options={{
                    headerRight: () => (
                            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                                <Item title="Add" iconName="camera" onPress={() => navigation.navigate('Create')} />
                            </HeaderButtons>
                    ),
                    headerLeft: ()=>menu(navigation)
                    
                }}/>

                <Stack.Screen name="PostScreen" component={PostScreen}
                    //options - либо обьект, либо функция, которая возвращает обьект
                    options={({ route }) => ({
                        title: route.params.post.text
                    })} />
            </Stack.Navigator>
    )
}
const BookedNavigation = ({navigation}) => {
    return(
    <Stack.Navigator initialRouteName="BookedScreen" screenOptions={{
            title: "Booked",
            ...options     
            }}>
                <Stack.Screen name="BookedScreen" component={BookedScreen} options={{
                    headerLeft: ()=>menu(navigation)
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
const AboutNavigation = ({navigation}) => {
    return (
        <Stack.Navigator screenOptions={{
            title: "About us",
            ...options     
            }}>
            <Stack.Screen name="About"component={AboutScreen} options={{headerLeft:  ()=>menu(navigation)}}/>
        </Stack.Navigator>
    )
}
const CreateNavigation = ({navigation}) => {
    return (
        <Stack.Navigator screenOptions={{
            title: "Create a post",
            ...options     
            }}>
            <Stack.Screen name="Create"component={CreateScreen} options={{headerLeft:  ()=>menu(navigation)}}/>
        </Stack.Navigator>
    )
}

const TabNavigation = () => {
    return (
        <Tab.Navigator
                shifting={true}
                tabBarOptions={{
                    activeTintColor: THEMES.MAIN_COLOR
            }}>
                <Tab.Screen name="Main" component={MainNavigation} options={{ tabBarIcon: ({ color }) => <Ionicons name="md-folder-open-sharp" size={24} color={color}/>}}/>
                <Tab.Screen name="Booked" component={BookedNavigation} options={{tabBarIcon:({color})=><Ionicons name="ios-star-sharp" size={24} color={color} />}} />
            </Tab.Navigator>
    )
}
export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContentOptions={{activeTintColor:THEMES.MAIN_COLOR, labelStyle:{fontFamily:"bold"}}}>
                <Drawer.Screen name="Tab" component={TabNavigation} options={{drawerLabel:"Home"}} />
                <Drawer.Screen name="About" component={AboutNavigation} />
                <Drawer.Screen name="Create" component={CreateNavigation}/>
            </Drawer.Navigator>
        </NavigationContainer>
        
    )
}
