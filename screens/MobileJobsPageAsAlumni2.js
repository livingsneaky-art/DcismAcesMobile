import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import IOSStatusBarBlackImage from "../components/IOSStatusBarBlackImage";
import PageHeader from "../components/PageHeader";
import InputSearch from "../components/InputSearch";
import PendingApplicationsSection from "../components/PendingApplicationsSection";
import FormContainer4 from "../components/FormContainer4";
import { Color, Border } from "../GlobalStyles";

const MobileJobsPageAsAlumni2 = () => {
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
        search="Search"
        iconSend={require("../assets/iconsend.png")}
        inputSearchPosition="absolute"
        inputSearchTop={128}
        inputSearchRight={16}
        inputSearchLeft={16}
      />
      <PendingApplicationsSection
        applicationStatus="Pending Applications"
        jobTitle="Web Developer"
        developerJobTitle="Web Developer"
        propTop={196}
        propHeight={201}
      />
      <PendingApplicationsSection
        applicationStatus="Pending Applications"
        jobTitle="Back-End Developer"
        developerJobTitle="Full-Stack Developer"
        propTop={196}
        propHeight={201}
      />
      <PendingApplicationsSection
        applicationStatus="Pending Applications"
        jobTitle="Web Developer"
        developerJobTitle="Web Developer"
        propTop={405}
        propHeight={201}
      />
      <PendingApplicationsSection
        applicationStatus="Recommended for You"
        jobTitle="Web Developer"
        developerJobTitle="Front-End Developer"
        propTop={405}
        propHeight={201}
      />
      <PendingApplicationsSection
        applicationStatus="Pending Applications"
        jobTitle="Web Developer"
        developerJobTitle="Web Developer"
        propTop={614}
        propHeight={198}
      />
      <PendingApplicationsSection
        applicationStatus="Other Jobs in Your Area"
        jobTitle="Web Developer"
        developerJobTitle="Front-End Developer"
        propTop={614}
        propHeight={198}
      />
      <View style={styles.mobileJobsPageAsAlumniChild} />
      <FormContainer4 />
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
  image12Icon: {
    top: 0,
    left: 0,
    borderRadius: Border.br_195xl,
  },
  logo: {
    top: 50,
    left: 306,
  },
  mobileJobsPageAsAlumni: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default MobileJobsPageAsAlumni2;
