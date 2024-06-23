import { NavigationContainer } from "@react-navigation/native";
import Router from "./router";
import "react-native-gesture-handler";

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

