import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Color, Border } from "../GlobalStyles";

const FormContainer = () => {
  return (
    <View style={[styles.navbarMobile, styles.navbarMobileLayout]}>
      <View style={styles.eventsNewsAndInformation}>
        <Image
          style={styles.questionCircleFill2Icon}
          contentFit="cover"
          source={require("../assets/questioncirclefill-2.png")}
        />
        <View
          style={[styles.eventsNewsAndInformationChild, styles.eventsPosition]}
        />
        <Image
          style={[styles.bellFill4Icon, styles.fill4IconPosition]}
          contentFit="cover"
          source={require("../assets/bellfill-3.png")}
        />
        <Image
          style={styles.image8Icon}
          contentFit="cover"
          source={require("../assets/image-7.png")}
        />
        <Image
          style={[styles.briefcaseFill5Icon, styles.fill4IconPosition]}
          contentFit="cover"
          source={require("../assets/briefcasefill-2.png")}
        />
        <View
          style={[styles.eventsNewsAndInformationItem, styles.eventsPosition]}
        />
        <Image
          style={[styles.questionCircleFill4Icon, styles.fill4IconPosition]}
          contentFit="cover"
          source={require("../assets/questioncirclefill-2.png")}
        />
        <Image
          style={styles.newspaper1Icon}
          contentFit="cover"
          source={require("../assets/newspaper-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarMobileLayout: {
    height: 64,
    width: 343,
  },
  eventsPosition: {
    top: 0,
    position: "absolute",
  },
  fill4IconPosition: {
    bottom: "31.25%",
    top: "29.69%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    height: "39.06%",
    position: "absolute",
  },
  questionCircleFill2Icon: {
    top: "34.38%",
    right: "23.32%",
    bottom: "26.56%",
    left: "69.39%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    height: "39.06%",
    width: "7.29%",
    position: "absolute",
  },
  eventsNewsAndInformationChild: {
    left: 0,
    backgroundColor: Color.colorMidnightblue,
    height: 64,
    width: 343,
  },
  bellFill4Icon: {
    width: "6.25%",
    right: "46.81%",
    left: "46.94%",
  },
  image8Icon: {
    top: 17,
    left: 294,
    borderRadius: Border.br_31xl,
    width: 30,
    height: 30,
    position: "absolute",
  },
  briefcaseFill5Icon: {
    width: "8.99%",
    right: "65.94%",
    left: "25.07%",
  },
  eventsNewsAndInformationItem: {
    left: 73,
    backgroundColor: Color.colorYellow,
    width: 55,
    height: 4,
  },
  questionCircleFill4Icon: {
    right: "27.11%",
    left: "65.6%",
    width: "7.29%",
    bottom: "31.25%",
    top: "29.69%",
  },
  newspaper1Icon: {
    top: 19,
    left: 27,
    width: 28,
    height: 25,
    position: "absolute",
  },
  eventsNewsAndInformation: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  navbarMobile: {
    top: 728,
    left: 16,
    position: "absolute",
  },
});

export default FormContainer;
