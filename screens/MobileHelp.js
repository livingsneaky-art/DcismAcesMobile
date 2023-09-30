import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import IOSStatusBarBlackImage from "../components/IOSStatusBarBlackImage";
import PageHeader from "../components/PageHeader";
import FormContainer3 from "../components/FormContainer3";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const MobileHelp = () => {
  return (
    <View style={styles.mobileHelp}>
      <IOSStatusBarBlackImage
        iOSStatusBarBlackImageIOS={require("../assets/iosstatus-barblack4.png")}
        iOSStatusBarBlackIconPosition="absolute"
        iOSStatusBarBlackIconTop={0}
        iOSStatusBarBlackIconRight={0}
        iOSStatusBarBlackIconLeft={0}
        iOSStatusBarBlackIconMaxWidth="100%"
      />
      <PageHeader
        left="Filter"
        signUp="HELP"
        iconX={require("../assets/iconx2.png")}
        right="Back"
        showLeft={false}
        showSignUp
        showRight
        pageHeaderPosition="absolute"
        pageHeaderWidth="unset"
        pageHeaderTop={60}
        pageHeaderLeft={16}
        pageHeaderRight={16}
        signUpMarginLeft={-17.5}
        signUpFontSize={15}
        rightColor="#2e86ab"
      />
      <Image
        style={styles.mobileHelpChild}
        contentFit="cover"
        source={require("../assets/rectangle-1542.png")}
      />
      <Text
        style={[
          styles.frequentlyAskedQuestions,
          styles.frequentlyAskedQuestionsPosition,
        ]}
      >
        Frequently Asked Questions
      </Text>
      <Text
        style={[
          styles.loremIpsumConsecteturContainer,
          styles.frequentlyAskedQuestionsPosition,
        ]}
      >
        <Text style={styles.loremIpsum}>
          <Text style={styles.loremIpsum1}>{`Lorem Ipsum?
`}</Text>
          <Text style={styles.text}>{` 
`}</Text>
        </Text>
        <Text style={styles.consecteturAdipiscingElitS}>
          <Text
            style={styles.consecteturLayout}
          >{`consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolo
`}</Text>
          <Text style={styles.blankLine}> </Text>
        </Text>
        <Text style={styles.loremIpsum}>
          <Text style={styles.loremIpsum1}>{`Lorem Ipsum?
`}</Text>
          <Text style={styles.text}>{` 
`}</Text>
        </Text>
        <Text style={styles.consecteturAdipiscingElitS}>
          <Text
            style={styles.consecteturLayout}
          >{`consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolo
`}</Text>
          <Text style={styles.blankLine}> </Text>
        </Text>
        <Text style={styles.loremIpsum}>
          <Text style={styles.loremIpsum1}>{`Lorem Ipsum?
`}</Text>
          <Text style={styles.text}>{` 
`}</Text>
        </Text>
        <Text
          style={[styles.consecteturAdipiscingElit2, styles.consecteturLayout]}
        >
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolo
        </Text>
      </Text>
      <View style={styles.mobileHelpItem} />
      <FormContainer3 />
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
  frequentlyAskedQuestionsPosition: {
    width: 317,
    textAlign: "left",
    color: Color.colorBlack,
    left: 29,
    position: "absolute",
  },
  consecteturLayout: {
    lineHeight: 19,
    fontSize: FontSize.size_base,
  },
  logoLayout: {
    height: 39,
    width: 42,
    position: "absolute",
  },
  mobileHelpChild: {
    top: 95,
    left: 12,
    borderRadius: Border.br_3xs,
    width: 344,
    height: 624,
    position: "absolute",
  },
  frequentlyAskedQuestions: {
    top: 118,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  loremIpsum1: {
    fontSize: FontSize.size_xl,
  },
  text: {
    fontSize: FontSize.size_7xs,
  },
  loremIpsum: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  blankLine: {
    fontSize: FontSize.size_lg,
  },
  consecteturAdipiscingElitS: {
    fontFamily: FontFamily.robotoRegular,
  },
  consecteturAdipiscingElit2: {
    fontFamily: FontFamily.robotoRegular,
  },
  loremIpsumConsecteturContainer: {
    top: 206,
    height: 481,
  },
  mobileHelpItem: {
    top: 803,
    left: 100,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderTopWidth: 5,
    width: 178,
    height: 5,
    position: "absolute",
  },
  image12Icon: {
    top: 0,
    left: 0,
    borderRadius: Border.br_195xl,
  },
  logo: {
    top: 47,
    left: 310,
  },
  mobileHelp: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default MobileHelp;
