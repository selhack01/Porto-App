import React from "react";
import { View } from "react-native";
import stylesheet from "./stylesheet";
import { ViroARScene, ViroARSceneNavigator, ViroBox } from "@reactvision/react-viro";
import { Button } from "ncore-mobile";
import { CompositeScreenProps } from "@react-navigation/native";

const Arpage = ({ navigation }: { navigation: CompositeScreenProps<any, any>["navigation"] }) => {

    const Scene1 = () => {
        return <ViroARScene >
            <ViroBox
                height={2}
                length={2}
                width={2}
                scale={[0.2, 0.2, 0.2]}
                position={[0, 0, -5]}
            />
        </ViroARScene>
    };

    return <View style={stylesheet.container}>

        <ViroARSceneNavigator
            autofocus={true}
            initialScene={{
                scene: Scene1,
            }}
            style={stylesheet.container}
        />
        <Button
            onPress={() => {
                navigation.navigate('Home')
            }}
        />
    </View>;
};

export default Arpage;
