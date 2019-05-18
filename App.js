import { Navigation} from "react-native-navigation";
import AuthScreen from "./src/screens/Auth/Auth";

//Register Screen
Navigation.registerComponent("navigation.AuthScreen", () => AuthScreen);

//Start An App
Navigation.startSingleScreenApp({
  screen: {
    screen: "navigation.AuthScreen",
    title: "Test"
  }
});