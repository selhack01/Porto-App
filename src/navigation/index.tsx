import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/homePage';
import ArPage from '../pages/arPage';

const RootStack = createNativeStackNavigator();

const Navigation = () => {
    return <NavigationContainer>
        <RootStack.Navigator
            initialRouteName='Home'
        >
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
