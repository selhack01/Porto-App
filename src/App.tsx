import React from "react";
import stylesheet from "./stylesheet";
import { View } from "react-native";
import Navigation from "./navigation";
import { NCoreProvider } from "ncore-mobile";
import { GestureHandlerRootView } from "react-native-gesture-handler"

const NcoreContextAPI = () => {
  return <View style={{ flex: 1 }}>
    <Navigation />
  </View>
};

const App = () => {
  return <GestureHandlerRootView
    style={stylesheet.container}
  >
    {/*@ts-ignore*/}
    <NCoreProvider>
      <NcoreContextAPI />
    </NCoreProvider>

  </GestureHandlerRootView >

};

export default App;