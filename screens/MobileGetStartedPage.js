import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import IOSStatusBarBlackImage from "../components/IOSStatusBarBlackImage";
import PageHeader from "../components/PageHeader";
import ButtonPrimary from "../components/ButtonPrimary";
import IOSKeyboardLightAlphabetic from "../components/IOSKeyboardLightAlphabetic";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const MobileGetStartedPage = () => {
  return (
    <View style={styles.mobileGetStartedPage}>
      <View style={[styles.iosstatusBarblackParent, styles.logInWithPosition]}>
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
          signUp="Join ACES"
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
          signUpMarginLeft={-73.5}
          signUpFontSize={30}
          rightColor="#5db075"
        />
        <ButtonPrimary
          buttonPrimaryPosition="absolute"
          buttonPrimaryBackgroundColor="rgba(46, 134, 171, 0)"
          buttonPrimaryWidth="unset"
          buttonPrimaryTop="unset"
          buttonPrimaryLeft={18}
          buttonPrimaryRight={14}
          buttonPrimaryBottom={397}
          buttonPrimaryBorderStyle="solid"
          buttonPrimaryBorderColor="#000"
          buttonPrimaryBorderWidth={1}
          clickMeColor="#000"
          clickMeTextAlign="left"
        />
        <ButtonPrimary
          buttonPrimaryPosition="absolute"
          buttonPrimaryBackgroundColor="rgba(46, 134, 171, 0)"
          buttonPrimaryWidth="unset"
          buttonPrimaryTop="unset"
          buttonPrimaryLeft={16}
          buttonPrimaryRight={16}
          buttonPrimaryBottom={337}
          buttonPrimaryBorderStyle="solid"
          buttonPrimaryBorderColor="#000"
          buttonPrimaryBorderWidth={1}
          clickMeColor="#000"
          clickMeTextAlign="left"
        />
        <ButtonPrimary
          clickMe="Get started"
          buttonPrimaryPosition="absolute"
          buttonPrimaryBackgroundColor="#2e86ab"
          buttonPrimaryWidth="unset"
          buttonPrimaryTop="unset"
          buttonPrimaryLeft={18}
          buttonPrimaryRight={14}
          buttonPrimaryBottom={503}
          buttonPrimaryBorderStyle="unset"
          buttonPrimaryBorderColor="unset"
          clickMeColor="#fff"
          clickMeTextAlign="center"
        />
        <Text style={[styles.alreadyHaveAn, styles.alreadyHaveAnFlexBox]}>
          Already have an account?
        </Text>
        <Text
          style={[styles.createAnAccount, styles.alreadyHaveAnFlexBox]}
        >{`Create an account to connect with CES! `}</Text>
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
          pageHeaderTop={62}
          pageHeaderLeft={17}
          pageHeaderRight={307}
          signUpMarginLeft={-16.5}
          signUpFontSize={15}
          rightColor="#2e86ab"
        />
        <Text style={[styles.byRegisteringYou, styles.alreadyHaveAnFlexBox]}>
          By registering, you agree to the terms and conditions
        </Text>
        <Image
          style={styles.lockRemovebgPreview31}
          contentFit="cover"
          source={require("../assets/lockremovebgpreview-3-1.png")}
        />
        <Text style={styles.or}>OR</Text>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={styles.logInWithParent}>
          <Text style={[styles.logInWith, styles.logTypo]}>Log-In with</Text>
          <Image
            style={[styles.googleLogoTransparent1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/googlelogotransparent-1.png")}
          />
        </View>
        <Text style={[styles.logInWith1, styles.logTypo]}>Log-In with</Text>
        <Image
          style={styles.image12Icon}
          contentFit="cover"
          source={require("../assets/image-12.png")}
        />
        <Image
          style={[styles.fn1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/fn-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logInWithPosition: {
    left: 0,
    top: 0,
  },
  alreadyHaveAnFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  frameLayout: {
    height: 1,
    width: 31,
    borderTopWidth: 1,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    top: 338,
    position: "absolute",
  },
  logTypo: {
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.uI30Semi,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  iconLayout: {
    height: 19,
    position: "absolute",
  },
  alreadyHaveAn: {
    marginLeft: -103.5,
    bottom: 311,
    color: Color.colorSteelblue_100,
    left: "50%",
    textAlign: "left",
    fontFamily: FontFamily.uI30Semi,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  createAnAccount: {
    marginLeft: -164.5,
    bottom: 615,
    color: Color.colorSteelblue_100,
    left: "50%",
    textAlign: "left",
    fontFamily: FontFamily.uI30Semi,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  byRegisteringYou: {
    top: 221,
    right: 45,
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: "#584f4f",
  },
  lockRemovebgPreview31: {
    top: 213,
    left: 61,
    width: 27,
    height: 27,
    position: "absolute",
  },
  or: {
    top: 327,
    left: 178,
    color: Color.colorGray_300,
    textAlign: "center",
    fontFamily: FontFamily.uI30Semi,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  frameChild: {
    left: 140,
  },
  frameItem: {
    left: 207,
  },
  logInWith: {
    left: 0,
    top: 0,
  },
  googleLogoTransparent1Icon: {
    top: 2,
    left: 92,
    width: 57,
  },
  logInWithParent: {
    top: 380,
    width: 149,
    height: 21,
    left: 120,
    position: "absolute",
  },
  logInWith1: {
    top: 441,
    left: 120,
  },
  image12Icon: {
    top: 59,
    left: 310,
    borderRadius: Border.br_195xl,
    width: 42,
    height: 39,
    position: "absolute",
  },
  fn1Icon: {
    top: 440,
    left: 209,
    width: 87,
  },
  iosstatusBarblackParent: {
    width: 375,
    position: "absolute",
    height: 812,
  },
  mobileGetStartedPage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
  },
});

export default MobileGetStartedPage;
