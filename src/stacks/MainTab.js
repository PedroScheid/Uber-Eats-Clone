import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from '../screens/Home';
import RestaurantDetail from '../screens/RestaurantDetail';
import OrderCompleted from '../screens/OrderCompleted';
import Login from '../screens/Login';

import { Provider as ReduxProvider } from 'react-redux';
import configureStore from "../redux/store";

const store = configureStore();

export default function MainTab(props) {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
    }
    return (
        <ReduxProvider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
                    <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
                    <Stack.Screen name="Login" component={Login} />
                </Stack.Navigator>
            </NavigationContainer>
        </ReduxProvider>
    );
}