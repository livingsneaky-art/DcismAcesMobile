import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import IOSStatusBarBlackImage from "../components/IOSStatusBarBlackImage";
import PageHeader from "../components/PageHeader";
import FormContainer2 from "../components/FormContainer2";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const MobileEditProfilePage1 = () => {
  return (
    <View style={styles.mobileEditProfilePage}>
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
        signUp="Notifications"
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
        signUpMarginLeft={-44.5}
        signUpFontSize={15}
        rightColor="#2e86ab"
      />
      <Image
        style={[styles.mobileEditProfilePageChild, styles.mobileChildLayout3]}
        contentFit="cover"
        source={require("../assets/rectangle-154.png")}
      />
      <Image
        style={styles.eyeFill3Icon}
        contentFit="cover"
        source={require("../assets/eyefill-3.png")}
      />
      <Image
        style={[styles.mobileEditProfilePageItem, styles.mobilePosition]}
        contentFit="cover"
        source={require("../assets/rectangle-62.png")}
      />
      <Image
        style={styles.image8Icon}
        contentFit="cover"
        source={require("../assets/image-81.png")}
      />
      <Image
        style={[
          styles.materialSymbolskeyboardArroIcon,
          styles.materialIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/materialsymbolskeyboardarrowdownrounded.png")}
      />
      <Image
        style={[
          styles.materialSymbolskeyboardArroIcon1,
          styles.materialIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/materialsymbolskeyboardarrowdownrounded.png")}
      />
      <Text style={[styles.alumniIdDetails, styles.skillsTypo]}>
        Alumni ID Details
      </Text>
      <Text style={[styles.bookmarkedJobs, styles.skillsTypo]}>
        Bookmarked Jobs
      </Text>
      <Text style={[styles.personalInformation, styles.informationTypo]}>
        PERSONAL INFORMATION
      </Text>
      <Text
        style={[styles.firstNameMiddle, styles.firstNameMiddleLayout]}
      >{`First Name
Middle Name
Last Name
Suffix
Sex
Date of Birth
Address`}</Text>
      <View
        style={[styles.mobileEditProfilePageInner, styles.mobileChildLayout2]}
      />
      <View style={[styles.rectangleView, styles.mobileChildLayout2]} />
      <View
        style={[styles.mobileEditProfilePageChild1, styles.mobileChildLayout2]}
      />
      <View
        style={[styles.mobileEditProfilePageChild2, styles.mobileChildLayout2]}
      />
      <View
        style={[styles.mobileEditProfilePageChild3, styles.mobileChildLayout2]}
      />
      <View
        style={[styles.mobileEditProfilePageChild4, styles.mobileChildLayout2]}
      />
      <View style={styles.mobileEditProfilePageChild5} />
      <View
        style={[styles.mobileEditProfilePageChild6, styles.mobileChildLayout2]}
      />
      <View
        style={[styles.mobileEditProfilePageChild7, styles.mobileChildLayout2]}
      />
      <View
        style={[styles.mobileEditProfilePageChild8, styles.mobileChildLayout2]}
      />
      <View
        style={[styles.mobileEditProfilePageChild9, styles.mobileChildLayout2]}
      />
      <View
        style={[styles.mobileEditProfilePageChild10, styles.mobileChildLayout2]}
      />
      <View
        style={[styles.mobileEditProfilePageChild11, styles.mobileChildLayout1]}
      />
      <View
        style={[styles.mobileEditProfilePageChild12, styles.mobileChildLayout1]}
      />
      <View
        style={[styles.mobileEditProfilePageChild13, styles.mobileChildLayout2]}
      />
      <View
        style={[
          styles.mobileEditProfilePageChild14,
          styles.mobileChildPosition,
        ]}
      />
      <View
        style={[
          styles.mobileEditProfilePageChild15,
          styles.mobileChildPosition,
        ]}
      />
      <View
        style={[
          styles.mobileEditProfilePageChild16,
          styles.mobileChildPosition,
        ]}
      />
      <View
        style={[
          styles.mobileEditProfilePageChild17,
          styles.mobileChildPosition,
        ]}
      />
      <View
        style={[styles.mobileEditProfilePageChild18, styles.mobileChildLayout2]}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={[styles.joseProtacioRizal, styles.bsitTypo]}>{`Jose
Protacio
Rizal
N/A
Male
June 19, 1999
Talamban, Cebu City, Cebu`}</Text>
      <Image
        style={styles.calendar3Event2Icon}
        contentFit="cover"
        source={require("../assets/calendar3event-2.png")}
      />
      <Text style={[styles.someOfYour, styles.informationTypo]}>
        *Some of your personal details may only be changed upon renewal of
        alumni ID
      </Text>
      <Text style={[styles.accountInformation, styles.informationTypo]}>
        ACCOUNT INFORMATION
      </Text>
      <Text style={[styles.emailMobileNo, styles.emailMobileNoLayout]}>{`Email
Mobile No.`}</Text>
      <Text
        style={[styles.joserizalcoolsitecom0999999, styles.employedPerkinsTypo]}
      >{`joserizal@coolsite.com
09999999999`}</Text>
      <Text style={[styles.professionalInformation, styles.informationTypo]}>
        PROFESSIONAL INFORMATION
      </Text>
      <Text
        style={[styles.statusOfEmp, styles.statusOfEmpTypo]}
      >{`Status of Emp.
Company
Company Add.
Occupation
Prev. Company
Prev. Occupation
Years of Exp.`}</Text>
      <Text
        style={[styles.employedPerkins, styles.employedPerkinsTypo]}
      >{`Employed
Perkins & Co.
Mandaue City, Cebu
Web Developer
N/A
N/A
1`}</Text>
      <Text style={[styles.education, styles.informationTypo]}>EDUCATION</Text>
      <Text style={[styles.highestAttainment, styles.undergraduateTypo]}>
        Highest Attainment
      </Text>
      <Text style={[styles.undergraduate, styles.undergraduateTypo]}>
        Undergraduate
      </Text>
      <Text style={[styles.masterInEconomics, styles.bsitTypo]}>
        Master in Economics
      </Text>
      <Text style={[styles.bsit, styles.bsitTypo]}>BSIT</Text>
      <Text style={[styles.namesOfSkills, styles.statusOfEmpTypo]}>
        Names of Skills
      </Text>
      <Text style={[styles.htmlCssJavascript, styles.bsitTypo]}>
        HTML, CSS, Javascript
      </Text>
      <Text style={[styles.skills, styles.informationTypo]}>SKILLS</Text>
      <Text style={[styles.addSkills, styles.mobileChildPosition]}>
        Add Skills
      </Text>
      <Text style={styles.office}>Office</Text>
      <Image
        style={[styles.plusCircle2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/pluscircle-2.png")}
      />
      <Image
        style={[styles.plusCircle3Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/pluscircle-2.png")}
      />
      <Text style={[styles.uploadedFiles, styles.resume1docxPosition]}>
        Uploaded Files
      </Text>
      <Text style={[styles.resume1docx, styles.resume1docxPosition]}>
        Resume(1).docx
      </Text>
      <Text style={[styles.resume, styles.informationTypo]}>RESUME</Text>
      <Image
        style={[styles.xCircle1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/xcircle-1.png")}
      />
      <Image
        style={[styles.xCircle2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/xcircle-1.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <View
        style={[styles.mobileEditProfilePageChild19, styles.mobileChildLayout]}
      />
      <Text style={[styles.saveChanges, styles.changesTypo]}>SAVE CHANGES</Text>
      <View
        style={[styles.mobileEditProfilePageChild20, styles.mobileChildLayout]}
      />
      <Text style={[styles.discardChanges, styles.changesTypo]}>
        DISCARD CHANGES
      </Text>
      <View
        style={[styles.mobileEditProfilePageChild21, styles.mobilePosition]}
      />
      <View
        style={[styles.mobileEditProfilePageChild22, styles.mobileChildLayout3]}
      />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-58.png")}
      />
      <Text style={[styles.welcomeToAces, styles.welcomeToAcesPosition]}>
        Welcome to ACES!
      </Text>
      <Text
        style={[styles.loremIpsumDolorContainer, styles.welcomeToAcesPosition]}
      >
        <Text
          style={styles.loremIpsumDolor}
        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
If you have any questions, you may view our Frequently Asked Questions section in the `}</Text>
        <Text style={[styles.help, styles.skillsTypo]}>Help</Text>
        <Text style={styles.loremIpsumDolor}> page.</Text>
      </Text>
      <Image
        style={[
          styles.mobileEditProfilePageChild23,
          styles.rectangleIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/rectangle-59.png")}
      />
      <Text style={[styles.youHaveJust, styles.youPosition]}>
        You have just been matched with Galliance!
      </Text>
      <Text style={[styles.youHaveBeenContainer, styles.youPosition]}>
        <Text
          style={styles.loremIpsumDolor}
        >{`You have been selected as one of the potential candidates for a recent job opening from Galliance!
You can view the posting `}</Text>
        <Text style={[styles.help, styles.skillsTypo]}>here</Text>
        <Text style={styles.loremIpsumDolor}> for more details.</Text>
      </Text>
      <View style={styles.lineView} />
      <FormContainer2 />
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
  mobileChildLayout3: {
    width: 344,
    left: 16,
  },
  mobilePosition: {
    top: 112,
    position: "absolute",
  },
  materialIconLayout: {
    height: 24,
    width: 24,
    left: 299,
    position: "absolute",
    overflow: "hidden",
  },
  skillsTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  informationTypo: {
    fontSize: FontSize.size_5xs,
    left: 94,
    textAlign: "left",
    position: "absolute",
  },
  firstNameMiddleLayout: {
    height: 156,
    top: 243,
  },
  mobileChildLayout2: {
    width: 117,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhitesmoke_200,
    borderStyle: "solid",
    height: 10,
    borderRadius: Border.br_3xs,
  },
  mobileChildLayout1: {
    left: 166,
    width: 117,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke_200,
    height: 10,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  mobileChildPosition: {
    left: 170,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  bsitTypo: {
    color: Color.colorDarkgray,
    left: 174,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  emailMobileNoLayout: {
    height: 34,
    top: 399,
  },
  employedPerkinsTypo: {
    width: 207,
    color: Color.colorDarkgray,
    left: 174,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  statusOfEmpTypo: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xs,
    left: 94,
    textAlign: "left",
    position: "absolute",
  },
  undergraduateTypo: {
    width: 79,
    color: Color.colorGray_200,
    fontFamily: FontFamily.interRegular,
    height: 10,
    fontSize: FontSize.size_5xs,
    left: 94,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    width: 16,
    left: 292,
    height: 10,
    position: "absolute",
    overflow: "hidden",
  },
  resume1docxPosition: {
    top: 663,
    color: Color.colorGray_200,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    position: "absolute",
  },
  mobileChildLayout: {
    height: 21,
    top: 702,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  changesTypo: {
    color: Color.colorWhite,
    top: 708,
    height: 10,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  rectangleIconLayout: {
    width: 323,
    left: 28,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  welcomeToAcesPosition: {
    width: 284,
    left: 46,
    textAlign: "left",
    position: "absolute",
  },
  youPosition: {
    left: 47,
    textAlign: "left",
    position: "absolute",
  },
  logoLayout: {
    height: 39,
    width: 42,
    position: "absolute",
  },
  mobileEditProfilePageChild: {
    top: 212,
    height: 550,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  eyeFill3Icon: {
    top: 775,
    left: 374,
    width: 18,
    height: 8,
    position: "absolute",
    overflow: "hidden",
  },
  mobileEditProfilePageItem: {
    left: 12,
    width: 352,
    height: 94,
    borderRadius: Border.br_3xs,
  },
  image8Icon: {
    borderRadius: Border.br_31xl,
    width: 54,
    height: 50,
    left: 33,
    top: 226,
    position: "absolute",
  },
  materialSymbolskeyboardArroIcon: {
    top: 127,
  },
  materialSymbolskeyboardArroIcon1: {
    top: 155,
  },
  alumniIdDetails: {
    top: 133,
    width: 101,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    fontWeight: "700",
    left: 33,
    position: "absolute",
  },
  bookmarkedJobs: {
    width: 95,
    top: 161,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    fontWeight: "700",
    left: 33,
    position: "absolute",
  },
  personalInformation: {
    width: 163,
    height: 10,
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 226,
    fontSize: FontSize.size_5xs,
  },
  firstNameMiddle: {
    width: 80,
    color: Color.colorGray_200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xs,
    left: 94,
    textAlign: "left",
    position: "absolute",
  },
  mobileEditProfilePageInner: {
    left: 167,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhitesmoke_200,
    position: "absolute",
    top: 243,
  },
  rectangleView: {
    top: 260,
    left: 167,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhitesmoke_200,
    position: "absolute",
  },
  mobileEditProfilePageChild1: {
    top: 277,
    left: 167,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhitesmoke_200,
    position: "absolute",
  },
  mobileEditProfilePageChild2: {
    top: 294,
    left: 167,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhitesmoke_200,
    position: "absolute",
  },
  mobileEditProfilePageChild3: {
    top: 311,
    left: 167,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhitesmoke_200,
    position: "absolute",
  },
  mobileEditProfilePageChild4: {
    top: 328,
    left: 167,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhitesmoke_200,
    position: "absolute",
  },
  mobileEditProfilePageChild5: {
    top: 399,
    width: 117,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke_200,
    left: 167,
    height: 10,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  mobileEditProfilePageChild6: {
    top: 416,
    left: 167,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhitesmoke_200,
    position: "absolute",
  },
  mobileEditProfilePageChild7: {
    top: 445,
    left: 167,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhitesmoke_200,
    position: "absolute",
  },
  mobileEditProfilePageChild8: {
    top: 462,
    left: 167,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhitesmoke_200,
    position: "absolute",
  },
  mobileEditProfilePageChild9: {
    top: 479,
    left: 167,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhitesmoke_200,
    position: "absolute",
  },
  mobileEditProfilePageChild10: {
    top: 496,
    left: 167,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhitesmoke_200,
    position: "absolute",
  },
  mobileEditProfilePageChild11: {
    top: 513,
  },
  mobileEditProfilePageChild12: {
    top: 530,
  },
  mobileEditProfilePageChild13: {
    top: 547,
    left: 167,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhitesmoke_200,
    position: "absolute",
  },
  mobileEditProfilePageChild14: {
    top: 574,
    width: 117,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhitesmoke_200,
    borderStyle: "solid",
    height: 10,
    borderRadius: Border.br_3xs,
  },
  mobileEditProfilePageChild15: {
    top: 587,
    width: 117,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhitesmoke_200,
    borderStyle: "solid",
    height: 10,
    borderRadius: Border.br_3xs,
  },
  mobileEditProfilePageChild16: {
    top: 613,
    width: 117,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhitesmoke_200,
    borderStyle: "solid",
    height: 10,
    borderRadius: Border.br_3xs,
  },
  mobileEditProfilePageChild17: {
    top: 639,
    width: 117,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhitesmoke_200,
    borderStyle: "solid",
    height: 10,
    borderRadius: Border.br_3xs,
  },
  mobileEditProfilePageChild18: {
    top: 345,
    left: 167,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhitesmoke_200,
    position: "absolute",
  },
  vectorIcon: {
    height: "0.37%",
    width: "1.33%",
    top: "42.12%",
    right: "25.6%",
    bottom: "57.51%",
    left: "73.07%",
  },
  joseProtacioRizal: {
    width: 169,
    height: 156,
    top: 243,
  },
  calendar3Event2Icon: {
    top: 329,
    left: 273,
    width: 7,
    height: 7,
    position: "absolute",
  },
  someOfYour: {
    top: 360,
    color: Color.colorTomato,
    width: 236,
    height: 31,
    fontFamily: FontFamily.interRegular,
  },
  accountInformation: {
    top: 386,
    width: 160,
    height: 10,
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  emailMobileNo: {
    width: 65,
    color: Color.colorGray_200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xs,
    left: 94,
    textAlign: "left",
    position: "absolute",
  },
  joserizalcoolsitecom0999999: {
    height: 34,
    top: 399,
  },
  professionalInformation: {
    top: 433,
    width: 193,
    height: 9,
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  statusOfEmp: {
    width: 103,
    height: 157,
    top: 445,
  },
  employedPerkins: {
    height: 97,
    top: 445,
  },
  education: {
    top: 562,
    width: 58,
    height: 9,
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  highestAttainment: {
    top: 574,
  },
  undergraduate: {
    top: 587,
  },
  masterInEconomics: {
    top: 574,
  },
  bsit: {
    top: 587,
  },
  namesOfSkills: {
    top: 612,
    width: 93,
    height: 10,
  },
  htmlCssJavascript: {
    width: 97,
    height: 9,
    top: 613,
  },
  skills: {
    top: 600,
    width: 44,
    height: 9,
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  addSkills: {
    top: 634,
    fontSize: FontSize.size_9xs,
    width: 25,
    height: 4,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  office: {
    left: 174,
    top: 639,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  plusCircle2Icon: {
    top: 639,
  },
  plusCircle3Icon: {
    top: 585,
  },
  uploadedFiles: {
    width: 91,
    height: 9,
    fontFamily: FontFamily.interRegular,
    left: 94,
    top: 663,
  },
  resume1docx: {
    left: 173,
    width: 70,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    height: 8,
  },
  resume: {
    top: 652,
    width: 51,
    height: 10,
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  xCircle1Icon: {
    top: 613,
  },
  xCircle2Icon: {
    top: 662,
  },
  vectorIcon1: {
    height: "1.97%",
    width: "4.27%",
    top: "83.62%",
    right: "66.93%",
    bottom: "14.41%",
    left: "28.8%",
  },
  mobileEditProfilePageChild19: {
    left: 193,
    backgroundColor: "#1dc776",
    width: 100,
  },
  saveChanges: {
    left: 212,
    width: 108,
    textAlign: "left",
  },
  mobileEditProfilePageChild20: {
    left: 89,
    backgroundColor: Color.colorTomato,
    width: 99,
  },
  discardChanges: {
    left: 73,
    textAlign: "center",
    width: 129,
  },
  mobileEditProfilePageChild21: {
    backgroundColor: Color.colorBlack,
    height: 611,
    opacity: 0.5,
    width: 344,
    left: 16,
  },
  mobileEditProfilePageChild22: {
    top: 109,
    borderRadius: 4,
    height: 593,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  rectangleIcon: {
    top: 141,
    height: 276,
  },
  welcomeToAces: {
    fontSize: FontSize.size_5xl,
    color: Color.colorGray_200,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 161,
  },
  loremIpsumDolor: {
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },
  help: {
    color: Color.colorDodgerblue,
  },
  loremIpsumDolorContainer: {
    top: 191,
    height: 91,
    fontSize: FontSize.size_base,
  },
  mobileEditProfilePageChild23: {
    top: 426,
    height: 251,
  },
  youHaveJust: {
    top: 444,
    width: 222,
    fontSize: FontSize.size_5xl,
    color: Color.colorGray_200,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  youHaveBeenContainer: {
    top: 551,
    width: 278,
    height: 33,
    fontSize: FontSize.size_base,
  },
  lineView: {
    top: 803,
    left: 99,
    borderColor: Color.colorBlack,
    borderTopWidth: 5,
    width: 178,
    height: 5,
    borderStyle: "solid",
    position: "absolute",
  },
  image12Icon: {
    top: 0,
    left: 0,
    borderRadius: Border.br_195xl,
  },
  logo: {
    top: 50,
    left: 305,
  },
  mobileEditProfilePage: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default MobileEditProfilePage1;
