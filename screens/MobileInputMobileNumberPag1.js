import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import IOSStatusBarBlackImage from "../components/IOSStatusBarBlackImage";
import PageHeader from "../components/PageHeader";
import InputText from "../components/InputText";
import ButtonPrimary from "../components/ButtonPrimary";
import IOSKeyboardLightAlphabetic from "../components/IOSKeyboardLightAlphabetic";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const MobileInputMobileNumberPag1 = () => {
  return (
    <View style={styles.mobileInputMobileNumberPag}>
      <IOSStatusBarBlackImage
        iOSStatusBarBlackImageIOS={require("../assets/iosstatus-barblack.png")}
        iOSStatusBarBlackIconPosition="absolute"
        iOSStatusBarBlackIconTop={0}
        iOSStatusBarBlackIconRight={0}
        iOSStatusBarBlackIconLeft={0}
        iOSStatusBarBlackIconMaxWidth="100%"
      />
      <PageHeader
        left="Login"
        signUp="Enter Mobile Number"
        iconX={require("../assets/iconx.png")}
        right="Right"
        showLeft={false}
        showSignUp
        showRight={false}
        pageHeaderPosition="absolute"
        pageHeaderWidth="unset"
        pageHeaderTop={62}
        pageHeaderLeft={16}
        pageHeaderRight={16}
        signUpMarginLeft={-100.5}
        signUpFontSize={20}
        rightColor="#5db075"
      />
      <InputText
        name1="09554107***"
        show={false}
        inputTextMarginTop="unset"
        inputTextPosition="absolute"
        inputTextWidth="unset"
        inputTextTop={166}
        inputTextRight={13}
        inputTextLeft={19}
        nameColor="#000"
        showColor="#5db075"
      />
      <ButtonPrimary
        clickMe="Next"
        buttonPrimaryPosition="absolute"
        buttonPrimaryBackgroundColor="#2e86ab"
        buttonPrimaryWidth="unset"
        buttonPrimaryTop="unset"
        buttonPrimaryLeft={16}
        buttonPrimaryRight={16}
        buttonPrimaryBottom={350}
        buttonPrimaryBorderStyle="unset"
        buttonPrimaryBorderColor="unset"
        clickMeColor="#fff"
        clickMeTextAlign="center"
      />
      <Text style={[styles.alreadyHaveAn, styles.alreadyHaveAnTypo]}>
        Already have an account?
      </Text>
      <IOSKeyboardLightAlphabetic
        shift={require("../assets/shift1.png")}
        iOSKeyboardLightAlphabetiPosition="absolute"
        iOSKeyboardLightAlphabetiMarginLeft={-187.5}
        iOSKeyboardLightAlphabetiBottom={0}
        iOSKeyboardLightAlphabetiLeft="50%"
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
        pageHeaderTop={59}
        pageHeaderLeft={16}
        pageHeaderRight={308}
        signUpMarginLeft={-16.5}
        signUpFontSize={15}
        rightColor="#2e86ab"
      />
      <Text style={[styles.theMobileNumber, styles.alreadyHaveAnTypo]}>
        The mobile number is already used!
      </Text>
      <View style={[styles.logo, styles.logoLayout]}>
        <Image
          style={[styles.image12Icon, styles.logoLayout]}
          contentFit="cover"
          source={require("../assets/image-12.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  alreadyHaveAnTypo: {
    textAlign: "left",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  logoLayout: {
    height: 39,
    width: 42,
    position: "absolute",
  },
  alreadyHaveAn: {
    marginLeft: -103.5,
    bottom: 311,
    left: "50%",
    fontWeight: "600",
    fontFamily: FontFamily.uI30Semi,
    color: Color.colorSteelblue_100,
  },
  theMobileNumber: {
    top: 136,
    left: 51,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: "#ff0000",
  },
  image12Icon: {
    top: 0,
    left: 0,
    borderRadius: Border.br_195xl,
  },
  logo: {
    top: 59,
    left: 320,
  },
  mobileInputMobileNumberPag: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default MobileInputMobileNumberPag1;
