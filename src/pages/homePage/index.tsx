import React, { useState } from "react";
import { Image, Linking, View, } from "react-native";
import { CompositeScreenProps } from "@react-navigation/native";
import stylesheet from "./stylesheet";
import { Button, Text } from "ncore-mobile";
import Carousel from "react-native-reanimated-carousel";
import data from '../../data/data.json';

const Home = ({ navigation }: { navigation: CompositeScreenProps<any, any>["navigation"] }) => {
    const [Data, setData] = useState(data["3D_Object"]);

    return <View style={stylesheet.container}>
        <View style={stylesheet.headerContainer}>
            <Text variant="header4" color="danger">AR Portföy</Text>
        </View>
        <View style={stylesheet.contentContainer}>
            <Carousel
                style={stylesheet.carousel}
                loop
                width={350}
                height={435}
                autoPlay={false}
                data={Data}
                scrollAnimationDuration={1000}
                renderItem={({ item }) => (
                    <View style={stylesheet.card}>
                        <Image
                            style={stylesheet.cardImage}
                            source={{
                                uri: item.image_url,
                            }}
                        />
                        <View style={stylesheet.cardHeader}>
                            <Text variant="header6" color="gray0">{item.name}</Text>
                            <Text variant="caption" color="gray40">{item.description}</Text>
                        </View>
                        <View style={stylesheet.cardButtons}>
                            <Button
                                title="3D View"
                                size="small"
                                color="warning"
                                onPress={() => {
                                    if (Data == data["3D_Object"]) {
                                        navigation.navigate('ArPage', item)
                                    }
                                    else {
                                        Linking.openURL(item.url)
                                    }
                                }}
                            />
                        </View>
                    </View>
                )}
            />
        </View>
        <View style={stylesheet.footerContainer}>
            <Button
                title="3D Objects"
                size="small"
                color="danger"
                onPress={() => {
                    setData(data["3D_Object"]
                    );
                }}
            />
            <Button
                title="Projects"
                size="small"
                color="danger"
                onPress={() => {
                    setData(data["Project"]);
                }}
            />
        </View>
    </View>
};

export default Home;
