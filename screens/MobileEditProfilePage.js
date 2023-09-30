import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import IOSStatusBarBlackImage from "../components/IOSStatusBarBlackImage";
import PageHeader from "../components/PageHeader";
import FormContainer from "../components/FormContainer";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const MobileEditProfilePage = () => {
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
        style={styles.mobileEditProfilePageChild}
        contentFit="cover"
        source={require("../assets/rectangle-154.png")}
      />
      <Image
        style={styles.eyeFill3Icon}
        contentFit="cover"
        source={require("../assets/eyefill-3.png")}
      />
      <Image
        style={styles.image8Icon}
        contentFit="cover"
        source={require("../assets/image-81.png")}
      />
      <Text style={[styles.personalInformation, styles.skillsTypo]}>
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
        style={[styles.mobileEditProfilePageItem, styles.mobileChildLayout1]}
      />
      <View
        style={[styles.mobileEditProfilePageInner, styles.mobileChildLayout1]}
      />
      <View style={[styles.rectangleView, styles.mobileChildLayout1]} />
      <View
        style={[styles.mobileEditProfilePageChild1, styles.mobileChildLayout1]}
      />
      <View
        style={[styles.mobileEditProfilePageChild2, styles.mobileChildLayout1]}
      />
      <View
        style={[styles.mobileEditProfilePageChild3, styles.mobileChildLayout1]}
      />
      <View style={styles.mobileEditProfilePageChild4} />
      <View
        style={[styles.mobileEditProfilePageChild5, styles.mobileChildLayout1]}
      />
      <View
        style={[styles.mobileEditProfilePageChild6, styles.mobileChildLayout1]}
      />
      <View
        style={[styles.mobileEditProfilePageChild7, styles.mobileChildLayout1]}
      />
      <View
        style={[styles.mobileEditProfilePageChild8, styles.mobileChildLayout1]}
      />
      <View
        style={[styles.mobileEditProfilePageChild9, styles.mobileChildLayout1]}
      />
      <View
        style={[styles.mobileEditProfilePageChild10, styles.mobileChildLayout]}
      />
      <View
        style={[styles.mobileEditProfilePageChild11, styles.mobileChildLayout]}
      />
      <View
        style={[styles.mobileEditProfilePageChild12, styles.mobileChildLayout1]}
      />
      <View
        style={[
          styles.mobileEditProfilePageChild13,
          styles.mobileChildPosition,
        ]}
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
        style={[styles.mobileEditProfilePageChild17, styles.mobileChildLayout1]}
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
      <Text style={[styles.someOfYour, styles.someOfYourTypo]}>
        *Some of your personal details may only be changed upon renewal of
        alumni ID
      </Text>
      <Text style={[styles.accountInformation, styles.skillsTypo]}>
        ACCOUNT INFORMATION
      </Text>
      <Text style={[styles.emailMobileNo, styles.emailMobileNoLayout]}>{`Email
Mobile No.`}</Text>
      <Text
        style={[styles.joserizalcoolsitecom0999999, styles.employedPerkinsTypo]}
      >{`joserizal@coolsite.com
09999999999`}</Text>
      <Text style={[styles.professionalInformation, styles.skillsTypo]}>
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
      <Text style={[styles.education, styles.skillsTypo]}>EDUCATION</Text>
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
      <Text style={[styles.skills, styles.skillsTypo]}>SKILLS</Text>
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
      <Text style={[styles.resume, styles.skillsTypo]}>RESUME</Text>
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
      <View style={styles.lineView} />
      <FormContainer />
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
  skillsTypo: {
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  firstNameMiddleLayout: {
    height: 156,
    top: 142,
  },
  mobileChildLayout1: {
    width: 117,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhitesmoke_200,
    borderStyle: "solid",
    height: 10,
    borderRadius: Border.br_3xs,
  },
  mobileChildLayout: {
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
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  someOfYourTypo: {
    fontFamily: FontFamily.interRegular,
    left: 94,
  },
  emailMobileNoLayout: {
    height: 34,
    top: 298,
  },
  employedPerkinsTypo: {
    width: 207,
    color: Color.colorDarkgray,
    left: 174,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  statusOfEmpTypo: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    fontSize: FontSize.size_5xs,
    left: 94,
    position: "absolute",
  },
  undergraduateTypo: {
    width: 79,
    color: Color.colorGray_200,
    fontFamily: FontFamily.interRegular,
    height: 10,
    textAlign: "left",
    fontSize: FontSize.size_5xs,
    left: 94,
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
    top: 562,
    color: Color.colorGray_200,
    textAlign: "left",
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  logoLayout: {
    height: 39,
    width: 42,
    position: "absolute",
  },
  mobileEditProfilePageChild: {
    top: 111,
    left: 16,
    width: 344,
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
  image8Icon: {
    left: 33,
    borderRadius: Border.br_31xl,
    width: 54,
    height: 50,
    top: 125,
    position: "absolute",
  },
  personalInformation: {
    width: 163,
    height: 10,
    textAlign: "left",
    fontSize: FontSize.size_5xs,
    position: "absolute",
    left: 94,
    color: Color.colorBlack,
    top: 125,
  },
  firstNameMiddle: {
    width: 80,
    color: Color.colorGray_200,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    fontSize: FontSize.size_5xs,
    left: 94,
    position: "absolute",
  },
  mobileEditProfilePageItem: {
    left: 167,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhitesmoke_200,
    position: "absolute",
    top: 142,
  },
  mobileEditProfilePageInner: {
    top: 159,
    left: 167,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhitesmoke_200,
    position: "absolute",
  },
  rectangleView: {
    top: 176,
    left: 167,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhitesmoke_200,
    position: "absolute",
  },
  mobileEditProfilePageChild1: {
    top: 193,
    left: 167,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhitesmoke_200,
    position: "absolute",
  },
  mobileEditProfilePageChild2: {
    top: 210,
    left: 167,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhitesmoke_200,
    position: "absolute",
  },
  mobileEditProfilePageChild3: {
    top: 227,
    left: 167,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhitesmoke_200,
    position: "absolute",
  },
  mobileEditProfilePageChild4: {
    top: 298,
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
  mobileEditProfilePageChild5: {
    top: 315,
    left: 167,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhitesmoke_200,
    position: "absolute",
  },
  mobileEditProfilePageChild6: {
    top: 344,
    left: 167,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhitesmoke_200,
    position: "absolute",
  },
  mobileEditProfilePageChild7: {
    top: 361,
    left: 167,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhitesmoke_200,
    position: "absolute",
  },
  mobileEditProfilePageChild8: {
    top: 378,
    left: 167,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhitesmoke_200,
    position: "absolute",
  },
  mobileEditProfilePageChild9: {
    top: 395,
    left: 167,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhitesmoke_200,
    position: "absolute",
  },
  mobileEditProfilePageChild10: {
    top: 412,
  },
  mobileEditProfilePageChild11: {
    top: 429,
  },
  mobileEditProfilePageChild12: {
    top: 446,
    left: 167,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhitesmoke_200,
    position: "absolute",
  },
  mobileEditProfilePageChild13: {
    top: 473,
    width: 117,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhitesmoke_200,
    borderStyle: "solid",
    height: 10,
    borderRadius: Border.br_3xs,
  },
  mobileEditProfilePageChild14: {
    top: 486,
    width: 117,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhitesmoke_200,
    borderStyle: "solid",
    height: 10,
    borderRadius: Border.br_3xs,
  },
  mobileEditProfilePageChild15: {
    top: 512,
    width: 117,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhitesmoke_200,
    borderStyle: "solid",
    height: 10,
    borderRadius: Border.br_3xs,
  },
  mobileEditProfilePageChild16: {
    top: 538,
    width: 117,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhitesmoke_200,
    borderStyle: "solid",
    height: 10,
    borderRadius: Border.br_3xs,
  },
  mobileEditProfilePageChild17: {
    top: 244,
    left: 167,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    backgroundColor: Color.colorWhitesmoke_200,
    position: "absolute",
  },
  vectorIcon: {
    height: "0.37%",
    width: "1.33%",
    top: "29.68%",
    right: "25.6%",
    bottom: "69.95%",
    left: "73.07%",
  },
  joseProtacioRizal: {
    width: 169,
    height: 156,
    top: 142,
  },
  calendar3Event2Icon: {
    top: 228,
    left: 273,
    width: 7,
    height: 7,
    position: "absolute",
  },
  someOfYour: {
    top: 259,
    color: Color.colorTomato,
    width: 236,
    height: 31,
    textAlign: "left",
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  accountInformation: {
    top: 285,
    width: 160,
    height: 10,
    textAlign: "left",
    fontSize: FontSize.size_5xs,
    position: "absolute",
    left: 94,
    color: Color.colorBlack,
  },
  emailMobileNo: {
    width: 65,
    color: Color.colorGray_200,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    fontSize: FontSize.size_5xs,
    left: 94,
    position: "absolute",
  },
  joserizalcoolsitecom0999999: {
    height: 34,
    top: 298,
  },
  professionalInformation: {
    top: 332,
    width: 193,
    height: 9,
    textAlign: "left",
    fontSize: FontSize.size_5xs,
    position: "absolute",
    left: 94,
    color: Color.colorBlack,
  },
  statusOfEmp: {
    width: 103,
    height: 157,
    top: 344,
  },
  employedPerkins: {
    height: 97,
    top: 344,
  },
  education: {
    top: 461,
    width: 58,
    height: 9,
    textAlign: "left",
    fontSize: FontSize.size_5xs,
    position: "absolute",
    left: 94,
    color: Color.colorBlack,
  },
  highestAttainment: {
    top: 473,
  },
  undergraduate: {
    top: 486,
  },
  masterInEconomics: {
    top: 473,
  },
  bsit: {
    top: 486,
  },
  namesOfSkills: {
    top: 511,
    width: 93,
    height: 10,
  },
  htmlCssJavascript: {
    width: 97,
    height: 9,
    top: 512,
  },
  skills: {
    top: 499,
    width: 44,
    height: 9,
    textAlign: "left",
    fontSize: FontSize.size_5xs,
    position: "absolute",
    left: 94,
    color: Color.colorBlack,
  },
  addSkills: {
    top: 533,
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
    top: 538,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  plusCircle2Icon: {
    top: 538,
  },
  plusCircle3Icon: {
    top: 484,
  },
  uploadedFiles: {
    width: 91,
    height: 9,
    fontFamily: FontFamily.interRegular,
    left: 94,
  },
  resume1docx: {
    left: 173,
    width: 70,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 562,
    height: 8,
  },
  resume: {
    top: 551,
    width: 51,
    height: 10,
    textAlign: "left",
    fontSize: FontSize.size_5xs,
    position: "absolute",
    left: 94,
    color: Color.colorBlack,
  },
  xCircle1Icon: {
    top: 512,
  },
  xCircle2Icon: {
    top: 561,
  },
  vectorIcon1: {
    height: "1.97%",
    width: "4.27%",
    top: "71.18%",
    right: "66.93%",
    bottom: "26.85%",
    left: "28.8%",
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
    top: 48,
    left: 310,
  },
  mobileEditProfilePage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default MobileEditProfilePage;
