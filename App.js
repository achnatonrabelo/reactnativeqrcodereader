import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CameraArea from "./src/screens/CameraArea";
import Home from './src/screens/Home'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home"
            component={Home}
            options={{ title: 'Home' }}
          />
          <Stack.Screen 
            name="CameraArea"
            component={CameraArea}
            options={{ title: 'Camera' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
