import { Navigation} from "react-native-navigation";

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";

//Register Screen
Navigation.registerComponent("navigation.AuthScreen", () => AuthScreen);
Navigation.registerComponent("navigation.SharePlaceScreen", () => SharePlaceScreen);
Navigation.registerComponent("navigation.FindPlaceScreen", () => FindPlaceScreen);

//Start An App
Navigation.startSingleScreenApp({
  screen: {
    screen: "navigation.AuthScreen",
    title: "Test"
  }
});