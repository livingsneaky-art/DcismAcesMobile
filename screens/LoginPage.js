import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import IOSStatusBarBlackImage from "../components/IOSStatusBarBlackImage";
import IOSKeyboardLightAlphabetic from "../components/IOSKeyboardLightAlphabetic";
import PageHeader from "../components/PageHeader";
import EmailFormContainer from "../components/EmailFormContainer";
import ButtonPrimary from "../components/ButtonPrimary";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LoginPage = () => {
  return (
    <View style={styles.loginPage}>
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
      <View style={[styles.logo, styles.logoLayout]}>
        <Image
          style={[styles.image12Icon, styles.logoLayout]}
          contentFit="cover"
          source={require("../assets/image-12.png")}
        />
      </View>
      <PageHeader
        left="Login"
        signUp="Log In"
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
        signUpMarginLeft={-42.5}
        signUpFontSize={30}
        rightColor="#5db075"
      />
      <EmailFormContainer />
      <View style={[styles.frame, styles.frameFlexBox]}>
        <View style={[styles.frame1, styles.frameFlexBox]}>
          <Text style={styles.forgotYourPasswordTypo}>
            Forgot your password?
          </Text>
          <View style={[styles.frame2, styles.frameFlexBox]}>
            <ButtonPrimary
              clickMe="Log In"
              buttonPrimaryPosition="unset"
              buttonPrimaryBackgroundColor="#2e86ab"
              buttonPrimaryWidth={343}
              buttonPrimaryTop="unset"
              buttonPrimaryLeft="unset"
              buttonPrimaryRight="unset"
              buttonPrimaryBottom="unset"
              buttonPrimaryBorderStyle="unset"
              buttonPrimaryBorderColor="unset"
              clickMeColor="#fff"
              clickMeTextAlign="center"
            />
            <Text
              style={[styles.registerNewAccount, styles.forgotYourPasswordTypo]}
            >
              Register new account?
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoLayout: {
    height: 39,
    width: 42,
    position: "absolute",
  },
  frameFlexBox: {
    alignItems: "center",
    width: 343,
    overflow: "hidden",
  },
  forgotYourPasswordTypo: {
    textAlign: "left",
    color: Color.colorSteelblue_100,
    fontFamily: FontFamily.uI30Semi,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  image12Icon: {
    top: 0,
    left: 0,
    borderRadius: Border.br_195xl,
  },
  logo: {
    top: 44,
    left: 321,
  },
  registerNewAccount: {
    marginTop: 20,
  },
  frame2: {
    marginTop: 132,
  },
  frame1: {
    justifyContent: "center",
  },
  frame: {
    top: 260,
    left: 17,
    position: "absolute",
    alignItems: "center",
    width: 343,
  },
  loginPage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default LoginPage;
