import React, { useEffect } from "react";
import stylesheet from "./stylesheet";
import { View } from "react-native";
import Navigation from "./navigation";
import { NCoreProvider } from "ncore-mobile";
import { GestureHandlerRootView } from "react-native-gesture-handler"
import SplashScreen from "react-native-splash-screen";


const NcoreContextAPI = () => {
  return <View style={{ flex: 1 }}>
    <Navigation />
  </View>
};

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

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