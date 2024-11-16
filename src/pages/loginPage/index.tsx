import React, { useEffect, useState } from "react";
import { View, } from "react-native";
import { CompositeScreenProps } from "@react-navigation/native";
import stylesheet from "./stylesheet";
import { Text } from "ncore-mobile";

const LoginPage = ({ navigation }: { navigation: CompositeScreenProps<any, any>["navigation"] }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home');
        }, 3000);
    }, []);

    return <View style={stylesheet.container}>
        <View style={stylesheet.title}>
            <Text variant="header1" color="gray20">Welcome </Text>
            <Text variant="header1" color="danger">Porto</Text>

        </View>
        <Text style={stylesheet.text} variant="header3" color="gray40">Explore my portfolio and discover my work</Text>
    </View>
};

export default LoginPage;
