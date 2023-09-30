const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import NewPassword from "./screens/NewPassword";
import EventsNewsAndInformation from "./screens/EventsNewsAndInformation";
import ContentContentBlockSmall from "./components/ContentContentBlockSmall";
import InputSearch from "./components/InputSearch";
import InputText from "./components/InputText";
import IOSKeyboardLightAlphabetic from "./components/IOSKeyboardLightAlphabetic";
import ButtonPrimary from "./components/ButtonPrimary";
import PageHeader from "./components/PageHeader";
import IOSStatusBarBlackImage from "./components/IOSStatusBarBlackImage";
import CodeVerification from "./screens/CodeVerification";
import ForgotPasswordPage from "./screens/ForgotPasswordPage";
import LoginPage from "./screens/LoginPage";
import MobileInputMobileNumberPag from "./screens/MobileInputMobileNumberPag";
import Group from "./screens/Group";
import MobileEditProfilePage from "./screens/MobileEditProfilePage";
import MobileProfilePage from "./screens/MobileProfilePage";
import MobileEditProfilePage1 from "./screens/MobileEditProfilePage1";
import MobileHelp from "./screens/MobileHelp";
import MobileJobsPageAsAlumni from "./screens/MobileJobsPageAsAlumni";
import MobileJobsPageAsAlumni1 from "./screens/MobileJobsPageAsAlumni1";
import MobileJobsPageAsAlumni2 from "./screens/MobileJobsPageAsAlumni2";
import MobileInputMobileNumberPag1 from "./screens/MobileInputMobileNumberPag1";
import MobileInputAlumniNamePage from "./screens/MobileInputAlumniNamePage";
import MobileEnterCodeVerification from "./screens/MobileEnterCodeVerification";
import MobileGetStartedPage from "./screens/MobileGetStartedPage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="NewPassword"
              component={NewPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EventsNewsAndInformation"
              component={EventsNewsAndInformation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CodeVerification"
              component={CodeVerification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPasswordPage"
              component={ForgotPasswordPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileInputMobileNumberPag"
              component={MobileInputMobileNumberPag}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group"
              component={Group}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileEditProfilePage"
              component={MobileEditProfilePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileProfilePage"
              component={MobileProfilePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileEditProfilePage1"
              component={MobileEditProfilePage1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileHelp"
              component={MobileHelp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileJobsPageAsAlumni"
              component={MobileJobsPageAsAlumni}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileJobsPageAsAlumni1"
              component={MobileJobsPageAsAlumni1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileJobsPageAsAlumni2"
              component={MobileJobsPageAsAlumni2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileInputMobileNumberPag1"
              component={MobileInputMobileNumberPag1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileInputAlumniNamePage"
              component={MobileInputAlumniNamePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileEnterCodeVerification"
              component={MobileEnterCodeVerification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MobileGetStartedPage"
              component={MobileGetStartedPage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
