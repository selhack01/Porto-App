import React, { useState } from "react";
import { View, } from "react-native";
import { CompositeScreenProps } from "@react-navigation/native";
import stylesheet from "./stylesheet";
import { Button, Text, TextInput } from "ncore-mobile";

const LoginPage = ({ navigation }: { navigation: CompositeScreenProps<any, any>["navigation"] }) => {

    const [isAdmin, setAdmin] = useState()

    return <View style={stylesheet.container}>
        <Text variant="header1" color="gray20">Welcome</Text>
        <View style={stylesheet.LoginContainer}>
            <Button
                title="Admin"
                color="danger"
                onPress={() => {

                }}
            />
            <Button
                title="Guest"
                color="danger"
                onPress={() => {
                    navigation.navigate('Home')
                }}
            />
        </View>

    </View>
};

export default LoginPage;
