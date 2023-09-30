import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import IOSStatusBarBlackImage from "../components/IOSStatusBarBlackImage";
import IOSKeyboardLightAlphabetic from "../components/IOSKeyboardLightAlphabetic";
import PageHeader from "../components/PageHeader";
import InputText from "../components/InputText";
import ButtonPrimary from "../components/ButtonPrimary";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const MobileInputMobileNumberPag = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

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
      <IOSKeyboardLightAlphabetic
        shift={require("../assets/shift1.png")}
        iOSKeyboardLightAlphabetiPosition="absolute"
        iOSKeyboardLightAlphabetiMarginLeft={-187.5}
        iOSKeyboardLightAlphabetiBottom={0}
        iOSKeyboardLightAlphabetiLeft="50%"
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
        pageHeaderTop={59}
        pageHeaderLeft={15}
        pageHeaderRight={17}
        signUpMarginLeft={-100.5}
        signUpFontSize={20}
        rightColor="#5db075"
      />
      <InputText
        name1="Mobile Number"
        show={false}
        inputTextMarginTop="unset"
        inputTextPosition="absolute"
        inputTextWidth="unset"
        inputTextTop={136}
        inputTextRight={15}
        inputTextLeft={17}
        nameColor="#bdbdbd"
        showColor="#5db075"
      />
      <ButtonPrimary
        clickMe="Next"
        buttonPrimaryPosition="absolute"
        buttonPrimaryBackgroundColor="#2e86ab"
        buttonPrimaryWidth="unset"
        buttonPrimaryTop="unset"
        buttonPrimaryLeft={15}
        buttonPrimaryRight={17}
        buttonPrimaryBottom={351}
        buttonPrimaryBorderStyle="unset"
        buttonPrimaryBorderColor="unset"
        clickMeColor="#fff"
        clickMeTextAlign="center"
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
        pageHeaderTop={54}
        pageHeaderLeft={15}
        pageHeaderRight={309}
        signUpMarginLeft={-16.5}
        signUpFontSize={15}
        rightColor="#2e86ab"
        onPageHeaderPress={() =>
          navigation.navigate("MobileEnterCodeVerification")
        }
      />
      <Text style={styles.alreadyHaveAn}>Already have an account?</Text>
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
  logoLayout: {
    height: 39,
    width: 42,
    position: "absolute",
  },
  alreadyHaveAn: {
    marginLeft: -89.5,
    bottom: 330,
    left: "50%",
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.uI30Semi,
    color: Color.colorSteelblue_100,
    textAlign: "left",
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
  mobileInputMobileNumberPag: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default MobileInputMobileNumberPag;
