import React from "react";
import { View } from "react-native";
import stylesheet from "./stylesheet";
import { Viro3DObject, ViroAmbientLight, ViroAnimations, ViroARScene, ViroARSceneNavigator, ViroBox, ViroMaterials } from "@reactvision/react-viro";
import { Button } from "ncore-mobile";
import { CompositeScreenProps } from "@react-navigation/native";

const Arpage = ({ navigation }: { navigation: CompositeScreenProps<any, any>["navigation"] }) => {

    const Scene1 = () => {

        ViroMaterials.createMaterials({
            material: {
                diffuseTexture: require('./../../assets/ARExporting/DiamondBake.png')
            }
        });

        ViroAnimations.registerAnimations({
            rotate: {
                duration: 1000,
                properties: {
                    rotateY: '+=45'
                }
            }
        })

        return <ViroARScene>
            <Viro3DObject
                source={require('./../../assets/ARExporting/Diamond.obj')}
                resources={[
                    require('./../../assets/ARExporting/Diamond.mtl')
                ]}
                materials={["material"]}
                type="OBJ"
                position={[0, -5, -5]}
                scale={[1, 1, 1]}
                animation={{ name: 'rotate', loop: true, run: true }}
            />
        </ViroARScene>
    };

    return <View style={stylesheet.container}>
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
    </View>;
};

export default Arpage;
