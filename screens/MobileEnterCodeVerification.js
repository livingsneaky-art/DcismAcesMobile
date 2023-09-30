import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import IOSStatusBarBlackImage from "../components/IOSStatusBarBlackImage";
import PageHeader from "../components/PageHeader";
import InputText from "../components/InputText";
import ButtonPrimary from "../components/ButtonPrimary";
import IOSKeyboardLightAlphabetic from "../components/IOSKeyboardLightAlphabetic";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const MobileEnterCodeVerification = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.mobileEnterCodeVerification}>
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
        signUp="Verification"
        iconX={require("../assets/iconx.png")}
        right="Right"
        showLeft={false}
        showSignUp
        showRight={false}
        pageHeaderPosition="absolute"
        pageHeaderWidth="unset"
        pageHeaderTop={78}
        pageHeaderLeft={16}
        pageHeaderRight={16}
        signUpMarginLeft={-54.5}
        signUpFontSize={20}
        rightColor="#5db075"
      />
      <InputText
        name1="Enter Code"
        show={false}
        inputTextMarginTop="unset"
        inputTextPosition="absolute"
        inputTextWidth="unset"
        inputTextTop={251}
        inputTextRight={16}
        inputTextLeft={16}
        nameColor="#bdbdbd"
        showColor="#5db075"
      />
      <ButtonPrimary
        clickMe="Verify"
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
        onButtonPrimaryPress={() =>
          navigation.navigate("MobileInputAlumniNamePage")
        }
      />
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
        pageHeaderTop={73}
        pageHeaderLeft={16}
        pageHeaderRight={308}
        signUpMarginLeft={-16.5}
        signUpFontSize={15}
        rightColor="#2e86ab"
      />
      <View style={styles.mobileEnterCodeVerificationChild} />
      <Text style={[styles.weveSentAn, styles.weveSentAnTypo]}>
        We’ve sent an OTP to your mobile number (+63)95541*****
      </Text>
      <Text style={[styles.alreadyHaveAn, styles.weveSentAnTypo]}>
        Already have an account?
      </Text>
      <View style={styles.logo}>
        <View style={styles.logo1Position}>
          <Image
            style={[styles.image12Icon, styles.logo1Position]}
            contentFit="cover"
            source={require("../assets/image-12.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weveSentAnTypo: {
    fontWeight: "600",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  logo1Position: {
    left: 0,
    top: 0,
    height: 39,
    width: 42,
    position: "absolute",
  },
  mobileEnterCodeVerificationChild: {
    top: 147,
    left: 16,
    backgroundColor: Color.colorSteelblue_200,
    width: 343,
    height: 66,
    position: "absolute",
  },
  weveSentAn: {
    top: 161,
    left: 71,
    fontFamily: FontFamily.robotoBold,
    color: Color.colorWhite,
    textAlign: "center",
    width: 240,
    height: 38,
  },
  alreadyHaveAn: {
    marginLeft: -88.5,
    bottom: 311,
    left: "50%",
    fontFamily: FontFamily.uI30Semi,
    color: Color.colorSteelblue_100,
    textAlign: "left",
  },
  image12Icon: {
    borderRadius: Border.br_195xl,
  },
  logo: {
    top: 70,
    left: 311,
    height: 39,
    width: 42,
    position: "absolute",
  },
  mobileEnterCodeVerification: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default MobileEnterCodeVerification;
