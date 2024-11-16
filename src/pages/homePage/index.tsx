import React, { useState } from "react";
import { Image, Linking, View } from "react-native";
import { CompositeScreenProps } from "@react-navigation/native";
import stylesheet from "./stylesheet";
import { Button, Text } from "ncore-mobile";
import Carousel from "react-native-reanimated-carousel";
import data from '../../data/data.json';

const Home = ({ navigation }: { navigation: CompositeScreenProps<any, any>["navigation"] }) => {
    const [Data, setData] = useState(data["Project"]);

    return <View style={stylesheet.container}>
        <View style={stylesheet.headerContainer}>
            <Text variant="header4" color="danger">Porto</Text>
        </View>
        <View style={stylesheet.contentContainer}>
            <Carousel
                style={stylesheet.carousel}
                loop
                width={350}
                height={475}
                autoPlay={true}
                data={Data}
                scrollAnimationDuration={1000}
                renderItem={({ item }) => (
                    <View style={stylesheet.card}>
                        <Image
                            style={stylesheet.cardImage}
                            source={{
                                uri: item.image_url,
                            }}
                            resizeMode="contain"
                        />
                        <View style={stylesheet.cardHeader}>
                            <Text variant="header5" color="danger">{item.name}</Text>
                            <Text variant="caption" color="gray40">{item.description}</Text>
                        </View>
                        <View style={stylesheet.cardButtons}>
                            <Button
                                title={(Data == data["3D_Object"]) ? "3D View" : "Review"}
                                size="small"
                                color="danger"
                                onPress={() => {
                                    if (Data == data["3D_Object"]) {
                                        navigation.navigate('ArPage')
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
                title="Project"
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
