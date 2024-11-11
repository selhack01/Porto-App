import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/homePage';
import ArPage from '../pages/arPage';
import LoginPage from '../pages/loginPage';

const RootStack = createNativeStackNavigator();

const Navigation = () => {
    return <NavigationContainer>
        <RootStack.Navigator
            initialRouteName='LoginPage'
        >
            <RootStack.Screen
                name="LoginPage"
                component={LoginPage}
                options={{ headerShown: false }}
            />
            <RootStack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <RootStack.Screen
                name="ArPage"
                component={ArPage}
                options={{ headerShown: false }}
            />
        </RootStack.Navigator>
    </NavigationContainer>
}
export default Navigation;
