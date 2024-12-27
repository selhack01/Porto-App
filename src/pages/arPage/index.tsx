import React, { useEffect, useState } from "react";
import { View } from "react-native";
import stylesheet from "./stylesheet";
import { Viro3DObject, ViroAnimations, ViroARScene, ViroARSceneNavigator, ViroDirectionalLight, ViroMaterials } from "@reactvision/react-viro";
import { Button } from "ncore-mobile";
import { CompositeScreenProps } from "@react-navigation/native";

const Arpage = ({ navigation, route }: {
    navigation: CompositeScreenProps<any, any>["navigation"];
    route: { params: { obj: any, mtl: any, png: any } }
}) => {
    const { obj, mtl, png } = route.params;
    // console.log(obj, mtl, png);

    const Scene1 = () => {
        ViroMaterials.createMaterials({
            material: {
                diffuseTexture: png,
            }
        });

        ViroAnimations.registerAnimations({
            rotate: {
                duration: 1000,
                properties: {
                    rotateY: '+=45',
                },
            },
        });

        return (
            <ViroARScene>
                <ViroDirectionalLight
                    color="#FFFFFF"
                    direction={[0, -1, 0]}
                    shadowOrthographicPosition={[0, 3, -5]}
                    shadowOrthographicSize={10}
                    shadowNearZ={2}
                    shadowFarZ={9}
                    castsShadow={true}
                />
                <Viro3DObject
                    source={obj}
                    resources={[mtl]}
                    materials={["material"]}
                    type="OBJ"
                    position={[0, -2, -5]}
                    scale={[0.5, 0.5, 0.5]}
                    animation={{ name: 'rotate', loop: true, run: true }}

                />
            </ViroARScene>
        );
    };

    return (
        <View style={stylesheet.container}>
            <ViroARSceneNavigator
                autofocus={true}
                initialScene={{
                    scene: Scene1,
                }}
                style={stylesheet.Camera}
            />
            <Button
                title="Go Back"
                color="danger"
                size="small"
                style={stylesheet.goBackButton}
                onPress={() => {
                    navigation.navigate('Home')
                }}
            />
        </View>
    );
};

export default Arpage;
