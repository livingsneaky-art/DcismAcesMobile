import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import IOSStatusBarBlackImage from "../components/IOSStatusBarBlackImage";
import PageHeader from "../components/PageHeader";
import InputSearch from "../components/InputSearch";
import { useNavigation } from "@react-navigation/native";
import PendingApplicationsSection from "../components/PendingApplicationsSection";
import { Color, Border } from "../GlobalStyles";

const MobileJobsPageAsAlumni1 = () => {
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
      <InputSearch
        search="Dev"
        iconSend={require("../assets/iconsend.png")}
        inputSearchPosition="absolute"
        inputSearchTop={128}
        inputSearchRight={16}
        inputSearchLeft={16}
      />
      <View style={styles.mobileJobsPageAsAlumniChild} />
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
              styles.image12IconPosition,
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
          <View style={styles.eventsNewsAndInformationItem} />
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
      <PendingApplicationsSection
        applicationStatus="Pending Applications"
        jobTitle="Web Developer"
        developerJobTitle="Web Developer"
      />
      <PendingApplicationsSection
        applicationStatus="Results for “Dev”"
        jobTitle="Back-End Developer"
        developerJobTitle="Full-Stack Developer"
        propTop={194}
        propHeight={201}
      />
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
  image12IconPosition: {
    left: 0,
    top: 0,
  },
  fillPosition: {
    bottom: "31.25%",
    top: "29.69%",
    height: "39.06%",
    position: "absolute",
  },
  logoLayout: {
    height: 39,
    width: 42,
    position: "absolute",
  },
  mobileJobsPageAsAlumniChild: {
    top: 804,
    left: 99,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderTopWidth: 5,
    width: 178,
    height: 5,
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
    height: 64,
    width: 343,
    position: "absolute",
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
    width: 55,
    height: 4,
    top: 0,
    position: "absolute",
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
    left: 0,
    top: 0,
  },
  logo: {
    top: 44,
    left: 308,
  },
  mobileJobsPageAsAlumni: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default MobileJobsPageAsAlumni1;
