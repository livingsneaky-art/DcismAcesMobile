import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import IOSStatusBarBlackImage from "../components/IOSStatusBarBlackImage";
import PageHeader from "../components/PageHeader";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const MobileJobsPageAsAlumni = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.mobileJobsPageAsAlumni}>
      <IOSStatusBarBlackImage
        iOSStatusBarBlackImageIOS={require("../assets/iosstatus-barblack.png")}
        iOSStatusBarBlackIconPosition="absolute"
        iOSStatusBarBlackIconTop={0}
        iOSStatusBarBlackIconRight={0}
        iOSStatusBarBlackIconLeft={0}
        iOSStatusBarBlackIconMaxWidth="100%"
      />
      <PageHeader
        left="Filter"
        signUp="Jobs"
        iconX={require("../assets/iconx.png")}
        right="Back"
        showLeft={false}
        showSignUp
        showRight
        pageHeaderPosition="absolute"
        pageHeaderWidth="unset"
        pageHeaderTop={60}
        pageHeaderLeft={16}
        pageHeaderRight={16}
        signUpMarginLeft={-16.5}
        signUpFontSize={15}
        rightColor="#2e86ab"
      />
      <Image
        style={styles.mobileJobsPageAsAlumniChild}
        contentFit="cover"
        source={require("../assets/rectangle-1543.png")}
      />
      <Text style={[styles.devopsSpecialistBased, styles.devopsLayout]}>
        DevOps Specialist based in Cebu
      </Text>
      <Text style={[styles.jobTitleDevopsContainer, styles.devopsLayout]}>
        <Text style={styles.jobTitle}>{`Job Title:          `}</Text>
        <Text style={styles.devopsTypo}>{`DevOps Specialist
`}</Text>
        <Text style={styles.jobTitle}>{`Company:         `}</Text>
        <Text style={styles.devopsTypo}>{`Costa Losta Inc.
`}</Text>
        <Text style={styles.jobTitle}>{`Location:          `}</Text>
        <Text style={styles.devopsTypo}>{`IT Park, Cebu City
`}</Text>
        <Text style={styles.jobTitle}>{`Offer:                `}</Text>
        <Text style={styles.devopsTypo}>{`₱26,000.00
`}</Text>
        <Text style={styles.jobTitle}>{`Slots:                 `}</Text>
        <Text style={styles.devopsTypo}>{`1
`}</Text>
        <Text style={styles.jobTitle}>{`Years of Exp:    `}</Text>
        <Text style={styles.devopsTypo}>{`3

`}</Text>
        <Text style={styles.jobTitle}>{`Responsibilities:
Build, deploy, and maintain our software applications and infrastructure
Develop automation scripts and tools to improve efficiency and reduce manual tasks
Implement and maintain continuous integration and delivery (CI/CD) pipelines
`}</Text>
      </Text>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.respond, styles.devopsTypo]}>RESPOND</Text>
        <Text style={[styles.close, styles.closeLayout]}>CLOSE</Text>
      </View>
      <View style={[styles.navbarMobile, styles.navbarMobileLayout]}>
        <View style={[styles.eventsNewsAndInformation, styles.iconLayout1]}>
          <Image
            style={[styles.questionCircleFill2Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/questioncirclefill-2.png")}
          />
          <View
            style={[
              styles.eventsNewsAndInformationChild,
              styles.navbarMobileLayout,
            ]}
          />
          <Pressable
            style={[styles.bellFill4, styles.fillPosition]}
            onPress={() => navigation.navigate("MobileEditProfilePage1")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/bellfill-3.png")}
            />
          </Pressable>
          <Pressable
            style={styles.image8}
            onPress={() => navigation.navigate("MobileProfilePage")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/image-7.png")}
            />
          </Pressable>
          <Image
            style={[styles.briefcaseFill5Icon, styles.fillPosition]}
            contentFit="cover"
            source={require("../assets/briefcasefill-2.png")}
          />
          <View
            style={[styles.eventsNewsAndInformationItem, styles.closeLayout]}
          />
          <Pressable
            style={[styles.questionCircleFill4, styles.fillPosition]}
            onPress={() => navigation.navigate("MobileHelp")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/questioncirclefill-2.png")}
            />
          </Pressable>
          <Image
            style={styles.newspaper1Icon}
            contentFit="cover"
            source={require("../assets/newspaper-1.png")}
          />
        </View>
      </View>
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
  devopsLayout: {
    width: 303,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  groupLayout: {
    height: 37,
    width: 110,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  devopsTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  closeLayout: {
    width: 55,
    position: "absolute",
  },
  navbarMobileLayout: {
    height: 64,
    width: 343,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  fillPosition: {
    bottom: "31.25%",
    top: "29.69%",
    height: "39.06%",
    position: "absolute",
  },
  logoLayout: {
    width: 42,
    height: 39,
    position: "absolute",
  },
  mobileJobsPageAsAlumniChild: {
    top: 96,
    borderRadius: Border.br_3xs,
    width: 344,
    height: 618,
    left: 16,
    position: "absolute",
  },
  devopsSpecialistBased: {
    top: 112,
    left: 33,
    fontSize: FontSize.uI30Semi_size,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  jobTitle: {
    fontFamily: FontFamily.interRegular,
  },
  jobTitleDevopsContainer: {
    top: 200,
    left: 35,
    height: 728,
    fontSize: FontSize.size_base,
  },
  groupChild: {
    top: 2,
    backgroundColor: Color.colorSteelblue_100,
    left: 0,
  },
  groupItem: {
    left: 121,
    backgroundColor: Color.colorGainsboro_200,
    top: 0,
  },
  respond: {
    top: 11,
    left: 10,
    color: Color.colorWhite,
    textAlign: "right",
    width: 84,
    height: 20,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  close: {
    top: 10,
    left: 150,
    height: 18,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    width: 55,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  rectangleParent: {
    top: 661,
    left: 72,
    width: 231,
    height: 39,
    position: "absolute",
  },
  questionCircleFill2Icon: {
    top: "34.38%",
    right: "23.32%",
    bottom: "26.56%",
    left: "69.39%",
    width: "7.29%",
    height: "39.06%",
    maxWidth: "100%",
    position: "absolute",
  },
  eventsNewsAndInformationChild: {
    backgroundColor: Color.colorMidnightblue,
    top: 0,
    left: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  bellFill4: {
    left: "46.94%",
    right: "46.81%",
    width: "6.25%",
  },
  icon1: {
    borderRadius: Border.br_31xl,
  },
  image8: {
    left: 294,
    top: 17,
    width: 30,
    height: 30,
    position: "absolute",
  },
  briefcaseFill5Icon: {
    width: "8.99%",
    right: "65.94%",
    left: "25.07%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  eventsNewsAndInformationItem: {
    left: 73,
    backgroundColor: Color.colorYellow,
    height: 4,
    top: 0,
  },
  questionCircleFill4: {
    left: "65.6%",
    right: "27.11%",
    width: "7.29%",
  },
  newspaper1Icon: {
    top: 19,
    left: 27,
    width: 28,
    height: 25,
    position: "absolute",
  },
  eventsNewsAndInformation: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  navbarMobile: {
    top: 728,
    left: 16,
  },
  image12Icon: {
    borderRadius: Border.br_195xl,
    top: 0,
    left: 0,
  },
  logo: {
    top: 51,
    left: 314,
  },
  mobileJobsPageAsAlumni: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default MobileJobsPageAsAlumni;
