import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import IOSStatusBarBlackImage from "../components/IOSStatusBarBlackImage";
import IOSKeyboardLightAlphabetic from "../components/IOSKeyboardLightAlphabetic";
import PageHeader from "../components/PageHeader";
import InputText from "../components/InputText";
import { useNavigation } from "@react-navigation/native";
import ButtonPrimary from "../components/ButtonPrimary";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const ForgotPasswordPage = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.forgotPasswordPage}>
      <IOSStatusBarBlackImage
        iOSStatusBarBlackImageIOS={require("../assets/iosstatus-barblack.png")}
        iOSStatusBarBlackIconPosition="absolute"
        iOSStatusBarBlackIconTop={0}
        iOSStatusBarBlackIconRight={0}
        iOSStatusBarBlackIconLeft={0}
        iOSStatusBarBlackIconMaxWidth="100%"
      />
      <IOSKeyboardLightAlphabetic
        shift={require("../assets/shift1.png")}
        iOSKeyboardLightAlphabetiPosition="absolute"
        iOSKeyboardLightAlphabetiMarginLeft={-187.5}
        iOSKeyboardLightAlphabetiBottom={0}
        iOSKeyboardLightAlphabetiLeft="50%"
      />
      <View style={styles.logo}>
        <Image
          style={styles.image12Icon}
          contentFit="cover"
          source={require("../assets/image-12.png")}
        />
      </View>
      <PageHeader
        left="Login"
        signUp="Forgot Password"
        iconX={require("../assets/iconx.png")}
        right="Right"
        showLeft={false}
        showSignUp
        showRight={false}
        pageHeaderPosition="absolute"
        pageHeaderWidth={343}
        pageHeaderTop={44}
        pageHeaderLeft={16}
        pageHeaderRight="unset"
        signUpMarginLeft={-100.5}
        signUpFontSize={25}
        rightColor="#5db075"
      />
      <PageHeader
        left="Filter"
        signUp="Jobs"
        iconX={require("../assets/iconx.png")}
        right="Back"
        showLeft={false}
        showSignUp={false}
        showRight
        pageHeaderPosition="absolute"
        pageHeaderWidth="unset"
        pageHeaderTop={44}
        pageHeaderLeft={28}
        pageHeaderRight={296}
        signUpMarginLeft={-16.5}
        signUpFontSize={15}
        rightColor="#2e86ab"
      />
      <View style={styles.frame}>
        <InputText
          name1="Email"
          show={false}
          inputTextMarginTop="unset"
          inputTextPosition="relative"
          inputTextWidth={343}
          inputTextTop="unset"
          inputTextRight="unset"
          inputTextLeft="unset"
          nameColor="#bdbdbd"
          showColor="#5db075"
        />
        <Pressable
          style={styles.alreadyHaveAnContainer}
          onPress={() => navigation.navigate("MobileGetStartedPage")}
        >
          <Text style={styles.alreadyHaveAnAccount}>
            Already have an account?
          </Text>
        </Pressable>
      </View>
      <ButtonPrimary
        clickMe="Submit"
        buttonPrimaryPosition="absolute"
        buttonPrimaryBackgroundColor="#2e86ab"
        buttonPrimaryWidth={343}
        buttonPrimaryTop={460}
        buttonPrimaryLeft={20}
        buttonPrimaryRight="unset"
        buttonPrimaryBottom="unset"
        buttonPrimaryBorderStyle="unset"
        buttonPrimaryBorderColor="unset"
        clickMeColor="#fff"
        clickMeTextAlign="center"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image12Icon: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_195xl,
    width: 42,
    height: 39,
  },
  logo: {
    position: "absolute",
    top: 44,
    left: 321,
    width: 42,
    height: 39,
  },
  alreadyHaveAnAccount: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.uI30Semi,
    color: Color.colorSteelblue_100,
    textAlign: "left",
  },
  alreadyHaveAnContainer: {
    height: 19,
    marginLeft: 65,
    marginTop: 266,
  },
  frame: {
    position: "absolute",
    top: 115,
    left: 16,
    width: 343,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  forgotPasswordPage: {
    position: "relative",
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default ForgotPasswordPage;
