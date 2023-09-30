import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import IOSStatusBarBlackImage from "../components/IOSStatusBarBlackImage";
import PageHeader from "../components/PageHeader";
import FormContainer1 from "../components/FormContainer1";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const MobileProfilePage = () => {
  return (
    <View style={styles.mobileProfilePage}>
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
        signUp="Profile"
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
        signUpMarginLeft={-21.5}
        signUpFontSize={15}
        rightColor="#5db075"
      />
      <Image
        style={styles.mobileProfilePageChild}
        contentFit="cover"
        source={require("../assets/rectangle-1541.png")}
      />
      <Text style={[styles.nameSexDate, styles.josePRizalPosition]}>{`Name
Sex
Date of Birth
Address`}</Text>
      <Text style={[styles.josePRizal, styles.josePRizalTypo]}>{`Jose P. Rizal
Male
June 19, 1999
Talamban, Cebu City, Cebu`}</Text>
      <Text
        style={[styles.idNumberProgram, styles.idNumberProgramPosition]}
      >{`ID Number
Program
Department
Date Graduated
Honors`}</Text>
      <Text style={[styles.statusOfEmp, styles.mobileNoTypo]}>{`Status of Emp.
Company
Company Add.
Occupation
Prev. Company
Prev. Occupation
Years of Exp.`}</Text>
      <Text
        style={[styles.bsInformationTechnology, styles.idNumberProgramPosition]}
      >{`16111111
BS Information Technology
DCISM
June 21, 2023
None`}</Text>
      <Text style={[styles.employedPerkins, styles.josePRizalTypo]}>{`Employed
Perkins & Co.
Mandaue City, Cebu
Web Developer
N/A
N/A
1`}</Text>
      <Text style={[styles.personalInformation, styles.informationTypo]}>
        PERSONAL INFORMATION
      </Text>
      <Text style={[styles.professionalInformation, styles.informationTypo]}>
        PROFESSIONAL INFORMATION
      </Text>
      <Text style={[styles.namesOfSkills, styles.namesOfSkillsPosition]}>
        Names of Skills
      </Text>
      <Text style={[styles.highestAttainment, styles.highestAttainmentLayout]}>
        Highest Attainment
      </Text>
      <Text style={[styles.masterInEconomics, styles.highestAttainmentLayout]}>
        Master in Economics
      </Text>
      <Text
        style={[styles.htmlCssJavascript, styles.htmlCssJavascriptTypo]}
      >{`HTML, CSS, Javascript
`}</Text>
      <Text style={[styles.skills, styles.informationTypo]}>SKILLS</Text>
      <Text style={[styles.education, styles.informationTypo]}>EDUCATION</Text>
      <Text style={[styles.uploadedFiles, styles.eyeFill4IconPosition]}>
        Uploaded Files
      </Text>
      <Text style={[styles.resume1doc, styles.josePRizalTypo]}>
        Resume(1).doc
      </Text>
      <Text style={[styles.resume, styles.resumeTypo]}>RESUME</Text>
      <Text style={[styles.academicInformation, styles.informationTypo]}>
        ACADEMIC INFORMATION
      </Text>
      <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      <Text
        style={[styles.joserizalcoolsitecom0999999, styles.emailPosition]}
      >{`joserizal@coolsite.com
09999999999`}</Text>
      <Text style={[styles.mobileNo, styles.mobileNoTypo]}>Mobile No.</Text>
      <Text style={[styles.accountInformation, styles.emailTypo]}>
        ACCOUNT INFORMATION
      </Text>
      <Text
        style={[styles.editProfile, styles.resumeTypo]}
      >{`EDIT PROFILE `}</Text>
      <Image
        style={styles.eyeFill3Icon}
        contentFit="cover"
        source={require("../assets/eyefill-3.png")}
      />
      <Image
        style={styles.image8Icon}
        contentFit="cover"
        source={require("../assets/image-82.png")}
      />
      <Image
        style={[styles.eyeFill4Icon, styles.eyeFill4IconPosition]}
        contentFit="cover"
        source={require("../assets/eyefill-4.png")}
      />
      <View style={styles.mobileProfilePageItem} />
      <FormContainer1 />
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
  josePRizalPosition: {
    height: 28,
    top: 317,
    textAlign: "left",
    color: Color.colorGray_200,
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  josePRizalTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  idNumberProgramPosition: {
    height: 72,
    top: 440,
    textAlign: "left",
    color: Color.colorGray_200,
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  mobileNoTypo: {
    color: Color.colorGray_200,
    textAlign: "left",
    fontSize: FontSize.size_5xs,
  },
  informationTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  namesOfSkillsPosition: {
    top: 706,
    color: Color.colorGray_200,
  },
  highestAttainmentLayout: {
    width: 84,
    top: 672,
    height: 9,
    textAlign: "left",
    color: Color.colorGray_200,
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  htmlCssJavascriptTypo: {
    height: 15,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  eyeFill4IconPosition: {
    top: 736,
    position: "absolute",
  },
  resumeTypo: {
    height: 10,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  emailTypo: {
    height: 6,
    textAlign: "left",
    fontSize: FontSize.size_5xs,
    left: 41,
    position: "absolute",
  },
  emailPosition: {
    top: 393,
    color: Color.colorGray_200,
  },
  logoLayout: {
    height: 39,
    width: 42,
    position: "absolute",
  },
  mobileProfilePageChild: {
    top: 112,
    left: 16,
    borderRadius: Border.br_3xs,
    width: 344,
    height: 734,
    position: "absolute",
  },
  nameSexDate: {
    width: 50,
    fontFamily: FontFamily.interRegular,
    left: 41,
  },
  josePRizal: {
    width: 111,
    left: 158,
    height: 28,
    top: 317,
    textAlign: "left",
    color: Color.colorGray_200,
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  idNumberProgram: {
    width: 62,
    fontFamily: FontFamily.interRegular,
    left: 41,
  },
  statusOfEmp: {
    top: 539,
    width: 69,
    height: 63,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: 41,
    position: "absolute",
  },
  bsInformationTechnology: {
    left: 156,
    width: 137,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  employedPerkins: {
    top: 542,
    height: 84,
    width: 216,
    left: 158,
    textAlign: "left",
    color: Color.colorGray_200,
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  personalInformation: {
    top: 281,
    fontSize: FontSize.size_base,
    width: 253,
    height: 55,
    textAlign: "left",
    left: 41,
    position: "absolute",
  },
  professionalInformation: {
    top: 525,
    width: 125,
    height: 5,
    textAlign: "left",
    fontSize: FontSize.size_5xs,
    left: 41,
    position: "absolute",
  },
  namesOfSkills: {
    width: 61,
    height: 4,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xs,
    left: 41,
    position: "absolute",
  },
  highestAttainment: {
    height: 9,
    fontFamily: FontFamily.interRegular,
    left: 41,
  },
  masterInEconomics: {
    height: 9,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 158,
  },
  htmlCssJavascript: {
    width: 103,
    top: 706,
    color: Color.colorGray_200,
    left: 158,
  },
  skills: {
    top: 692,
    width: 28,
    height: 5,
    textAlign: "left",
    fontSize: FontSize.size_5xs,
    left: 41,
    position: "absolute",
  },
  education: {
    top: 658,
    width: 51,
    height: 5,
    textAlign: "left",
    fontSize: FontSize.size_5xs,
    left: 41,
    position: "absolute",
  },
  uploadedFiles: {
    width: 60,
    height: 5,
    textAlign: "left",
    color: Color.colorGray_200,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.interRegular,
    left: 41,
  },
  resume1doc: {
    top: 735,
    width: 66,
    height: 7,
    left: 158,
    textAlign: "left",
    color: Color.colorGray_200,
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  resume: {
    top: 723,
    width: 42,
    height: 10,
    color: Color.colorBlack,
    left: 41,
  },
  academicInformation: {
    top: 426,
    width: 106,
    height: 5,
    textAlign: "left",
    fontSize: FontSize.size_5xs,
    left: 41,
    position: "absolute",
  },
  email: {
    width: 21,
    top: 393,
    color: Color.colorGray_200,
    fontFamily: FontFamily.interRegular,
  },
  joserizalcoolsitecom0999999: {
    left: 157,
    height: 15,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_5xs,
    position: "absolute",
    width: 216,
  },
  mobileNo: {
    top: 410,
    width: 43,
    height: 5,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: 41,
    position: "absolute",
  },
  accountInformation: {
    top: 379,
    width: 104,
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  editProfile: {
    top: 677,
    left: 115,
    color: Color.colorWhite,
    width: 55,
  },
  eyeFill3Icon: {
    top: 775,
    left: 374,
    width: 18,
    height: 8,
    position: "absolute",
    overflow: "hidden",
  },
  image8Icon: {
    top: 139,
    left: 138,
    borderRadius: Border.br_31xl,
    width: 100,
    height: 100,
    position: "absolute",
  },
  eyeFill4Icon: {
    left: 244,
    width: 17,
    height: 9,
    overflow: "hidden",
  },
  mobileProfilePageItem: {
    top: 803,
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
    top: 47,
    left: 308,
  },
  mobileProfilePage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default MobileProfilePage;
