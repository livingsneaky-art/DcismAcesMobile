import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import IOSStatusBarBlackImage from "../components/IOSStatusBarBlackImage";
import IOSKeyboardLightAlphabetic from "../components/IOSKeyboardLightAlphabetic";
import PageHeader from "../components/PageHeader";
import InputText from "../components/InputText";
import ButtonPrimary from "../components/ButtonPrimary";
import { Border, Color, Padding } from "../GlobalStyles";

const NewPassword = () => {
  return (
    <View style={styles.newPassword}>
      <IOSStatusBarBlackImage
        iOSStatusBarBlackImageIOS={require("../assets/iosstatus-barblack2.png")}
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
        signUp="New Password"
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
        signUpMarginLeft={-87.5}
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
      <InputText
        name1="New Password"
        show
        inputTextMarginTop="unset"
        inputTextPosition="absolute"
        inputTextWidth={343}
        inputTextTop={231}
        inputTextRight="unset"
        inputTextLeft={21}
        nameColor="#bdbdbd"
        showColor="#2e86ab"
      />
      <InputText
        name1="Confirm Password"
        show
        inputTextMarginTop="unset"
        inputTextPosition="absolute"
        inputTextWidth={343}
        inputTextTop={319}
        inputTextRight="unset"
        inputTextLeft={25}
        nameColor="#bdbdbd"
        showColor="#2e86ab"
      />
      <ButtonPrimary
        clickMe="Confirm"
        buttonPrimaryPosition="absolute"
        buttonPrimaryBackgroundColor="#2e86ab"
        buttonPrimaryWidth={343}
        buttonPrimaryTop={431}
        buttonPrimaryLeft={11}
        buttonPrimaryRight="unset"
        buttonPrimaryBottom="unset"
        buttonPrimaryBorderStyle="unset"
        buttonPrimaryBorderColor="unset"
        clickMeColor="#fff"
        clickMeTextAlign="center"
      />
      <View style={styles.frame}>
        <View style={styles.frameChild} />
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
  image12Icon: {
    top: 0,
    left: 0,
    borderRadius: Border.br_195xl,
  },
  logo: {
    top: 44,
    left: 321,
  },
  frameChild: {
    width: 100,
    height: 100,
    overflow: "hidden",
  },
  frame: {
    top: 105,
    left: 19,
    backgroundColor: Color.colorSteelblue_200,
    width: 343,
    height: 66,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: Padding.p_31xl,
    paddingVertical: 0,
    position: "absolute",
    overflow: "hidden",
  },
  newPassword: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default NewPassword;
