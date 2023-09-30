import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import IOSStatusBarBlackImage from "../components/IOSStatusBarBlackImage";
import PageHeader from "../components/PageHeader";
import InputText from "../components/InputText";
import ButtonPrimary from "../components/ButtonPrimary";
import IOSKeyboardLightAlphabetic from "../components/IOSKeyboardLightAlphabetic";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const MobileInputAlumniNamePage = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.mobileInputAlumniNamePage}>
      <IOSStatusBarBlackImage
        iOSStatusBarBlackImageIOS={require("../assets/iosstatus-barblack3.png")}
        iOSStatusBarBlackIconPosition="absolute"
        iOSStatusBarBlackIconTop={0}
        iOSStatusBarBlackIconRight={0}
        iOSStatusBarBlackIconLeft={0}
        iOSStatusBarBlackIconMaxWidth="100%"
      />
      <PageHeader
        left="Login"
        signUp="What’s your name?"
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
        signUpMarginLeft={-90.5}
        signUpFontSize={20}
        rightColor="#5db075"
      />
      <InputText
        name1="First Name"
        show={false}
        inputTextMarginTop="unset"
        inputTextPosition="absolute"
        inputTextWidth="unset"
        inputTextTop={155}
        inputTextRight={14}
        inputTextLeft={18}
        nameColor="#bdbdbd"
        showColor="#5db075"
      />
      <InputText
        name1="Middle Name"
        show={false}
        inputTextMarginTop="unset"
        inputTextPosition="absolute"
        inputTextWidth="unset"
        inputTextTop={216}
        inputTextRight={14}
        inputTextLeft={18}
        nameColor="#bdbdbd"
        showColor="#5db075"
      />
      <InputText
        name1="LastName"
        show={false}
        inputTextMarginTop="unset"
        inputTextPosition="absolute"
        inputTextWidth="unset"
        inputTextTop={277}
        inputTextRight={14}
        inputTextLeft={18}
        nameColor="#bdbdbd"
        showColor="#5db075"
      />
      <InputText
        name1="USC ID "
        show={false}
        inputTextMarginTop="unset"
        inputTextPosition="absolute"
        inputTextWidth="unset"
        inputTextTop={338}
        inputTextRight={14}
        inputTextLeft={18}
        nameColor="#bdbdbd"
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
        buttonPrimaryBottom={332}
        buttonPrimaryBorderStyle="unset"
        buttonPrimaryBorderColor="unset"
        clickMeColor="#fff"
        clickMeTextAlign="center"
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
    marginLeft: -88.5,
    bottom: 311,
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
    top: 63,
    left: 322,
  },
  mobileInputAlumniNamePage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default MobileInputAlumniNamePage;
