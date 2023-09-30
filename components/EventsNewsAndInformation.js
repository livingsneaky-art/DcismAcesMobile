import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const EventsNewsAndInformation = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.eventsNewsAndInformation}>
      <Image
        style={styles.iosstatusBarblackIcon}
        contentFit="cover"
        source={require("../assets/iosstatus-barblack.png")}
      />
      <View style={[styles.pageHeader, styles.pageHeaderPosition]}>
        <Text style={[styles.filter, styles.mAgoFlexBox]}>Filter</Text>
        <Text style={[styles.feed, styles.feedTypo]}>
          Events, News, and Information
        </Text>
        <Image
          style={styles.iconx}
          contentFit="cover"
          source={require("../assets/iconx.png")}
        />
        <Text style={[styles.back, styles.backPosition]}>Back</Text>
      </View>
      <View style={[styles.inputsearch, styles.inputsearchLayout]}>
        <Image
          style={[styles.bgIcon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/bg.png")}
        />
        <Text style={[styles.search, styles.backPosition]}>Search</Text>
        <Image
          style={[styles.iconsend, styles.backPosition]}
          contentFit="cover"
          source={require("../assets/iconsend.png")}
        />
      </View>
      <View style={styles.contentBlocks}>
        <View
          style={[
            styles.contentcontentBlocksmall,
            styles.contentcontentPosition,
          ]}
        >
          <View style={[styles.contentBlock, styles.inputsearchLayout]} />
          <Text style={[styles.header, styles.feedTypo]}>
            Job Fair on March 24, 2024
          </Text>
          <Text style={[styles.mAgo, styles.mAgoTypo]}>8m ago</Text>
          <Text
            style={[styles.hellWantTo, styles.mAgoTypo]}
          >{`The Department of Computer & Information Sciences and Mathem...`}</Text>
          <View style={[styles.dividerLine, styles.dividerLineBorder]} />
        </View>
        <View
          style={[
            styles.contentcontentBlocksmall1,
            styles.contentcontentPosition,
          ]}
        >
          <View style={[styles.contentBlock, styles.inputsearchLayout]} />
          <Text
            style={[styles.header, styles.feedTypo]}
          >{`DCISM Office closed on... `}</Text>
          <Text style={[styles.mAgo, styles.mAgoTypo]}>8m ago</Text>
          <Text
            style={[styles.hellWantTo, styles.mAgoTypo]}
          >{`The Department of Computer & Information Sciences and Mathem...`}</Text>
          <View style={[styles.dividerLine, styles.dividerLineBorder]} />
        </View>
        <View
          style={[
            styles.contentcontentBlocksmall2,
            styles.contentcontentPosition,
          ]}
        >
          <View style={[styles.contentBlock, styles.inputsearchLayout]} />
          <Text style={[styles.header, styles.feedTypo]}>
            New batch of Alumni added
          </Text>
          <Text style={[styles.mAgo, styles.mAgoTypo]}>8m ago</Text>
          <Text
            style={[styles.hellWantTo, styles.mAgoTypo]}
          >{`The Department of Computer & Information Sciences and Mathem...`}</Text>
          <View style={[styles.dividerLine, styles.dividerLineBorder]} />
        </View>
      </View>
      <Image
        style={[styles.briefcaseFill2Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/briefcasefill-2.png")}
      />
      <Image
        style={[styles.bellFill3Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/bellfill-3.png")}
      />
      <Image
        style={[styles.personBadge1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/personbadge-1.png")}
      />
      <Image
        style={[styles.image7Icon, styles.image8Layout]}
        contentFit="cover"
        source={require("../assets/image-7.png")}
      />
      <Image
        style={styles.image8Icon}
        contentFit="cover"
        source={require("../assets/image-8.png")}
      />
      <Image
        style={[styles.image10Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-10.png")}
      />
      <Image
        style={[styles.image11Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-11.png")}
      />
      <Image
        style={[styles.newspaperdark1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/newspaperdark-1.png")}
      />
      <Text style={[styles.viewMore, styles.viewTypo]}>View more</Text>
      <Text style={[styles.viewMore1, styles.viewTypo]}>View more</Text>
      <Text style={[styles.viewMore2, styles.viewTypo]}>View more</Text>
      <View style={[styles.navbarMobile, styles.navbarMobileLayout]}>
        <View style={styles.bgIconPosition}>
          <Image
            style={styles.questionCircleFill2Icon}
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
              style={[styles.icon, styles.iconLayout2]}
              contentFit="cover"
              source={require("../assets/bellfill-3.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.image8, styles.image8Layout]}
            onPress={() => navigation.navigate("MobileProfilePage")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout3]}
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
              style={[styles.icon, styles.iconLayout2]}
              contentFit="cover"
              source={require("../assets/questioncirclefill-2.png")}
            />
          </Pressable>
          <Image
            style={[styles.newspaper1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/newspaper-1.png")}
          />
        </View>
      </View>
      <View
        style={[styles.eventsNewsAndInformationInner, styles.dividerLineBorder]}
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
  pageHeaderPosition: {
    right: 16,
    left: 16,
  },
  mAgoFlexBox: {
    textAlign: "right",
    right: 0,
  },
  feedTypo: {
    fontFamily: FontFamily.uI30Semi,
    fontWeight: "600",
    color: Color.colorBlack,
    top: 0,
    position: "absolute",
  },
  backPosition: {
    top: "50%",
    position: "absolute",
  },
  inputsearchLayout: {
    height: 50,
    position: "absolute",
  },
  iconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  contentcontentPosition: {
    height: 77,
    left: 0,
    right: 0,
    position: "absolute",
  },
  mAgoTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  dividerLineBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  iconPosition: {
    bottom: "4.93%",
    top: "92%",
    height: "3.08%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  image8Layout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  iconLayout1: {
    height: 56,
    borderRadius: Border.br_3xs,
    left: 15,
    position: "absolute",
  },
  iconLayout: {
    height: 25,
    width: 28,
    position: "absolute",
  },
  viewTypo: {
    color: Color.colorMediumblue,
    fontSize: FontSize.size_5xs,
    left: 319,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  navbarMobileLayout: {
    height: 64,
    width: 343,
    position: "absolute",
  },
  fillPosition: {
    bottom: "31.25%",
    top: "29.69%",
    height: "39.06%",
    position: "absolute",
  },
  iconLayout3: {
    height: "100%",
    width: "100%",
  },
  logoLayout: {
    height: 39,
    width: 42,
    position: "absolute",
  },
  iosstatusBarblackIcon: {
    height: 44,
    maxWidth: "100%",
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  filter: {
    top: 8,
    color: Color.colorMediumseagreen_100,
    display: "none",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  feed: {
    marginLeft: -108.5,
    left: "50%",
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.colorBlack,
  },
  iconx: {
    top: 16,
    width: 16,
    height: 16,
    display: "none",
    left: 0,
    position: "absolute",
  },
  back: {
    marginTop: -10,
    color: Color.colorSteelblue_100,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    left: 0,
  },
  pageHeader: {
    top: 60,
    height: 36,
    left: 16,
    position: "absolute",
  },
  bgIcon: {
    borderRadius: Border.br_81xl,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  search: {
    marginTop: -9,
    color: Color.colorSilver,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    left: 16,
  },
  iconsend: {
    marginTop: -17,
    right: 8,
    width: 34,
    height: 34,
    display: "none",
  },
  inputsearch: {
    top: 128,
    left: 16,
    right: 16,
  },
  contentBlock: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 50,
    left: 0,
    top: 0,
  },
  header: {
    left: 66,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.uI30Semi,
    fontWeight: "600",
  },
  mAgo: {
    top: 2,
    color: Color.colorSilver,
    textAlign: "right",
    right: 0,
  },
  hellWantTo: {
    top: 27,
    width: 269,
    left: 66,
    textAlign: "left",
    color: Color.colorBlack,
  },
  dividerLine: {
    bottom: 0,
    borderColor: Color.colorGainsboro_100,
    borderTopWidth: 1,
    height: 1,
    left: 66,
    right: 0,
    borderStyle: "solid",
  },
  contentcontentBlocksmall: {
    top: 0,
  },
  contentcontentBlocksmall1: {
    top: 93,
  },
  contentcontentBlocksmall2: {
    top: 186,
  },
  contentBlocks: {
    height: 263,
    top: 194,
    left: 16,
    right: 16,
    position: "absolute",
  },
  briefcaseFill2Icon: {
    width: "8.22%",
    right: "65.38%",
    left: "26.4%",
  },
  bellFill3Icon: {
    width: "5.71%",
    right: "47.62%",
    left: "46.67%",
  },
  personBadge1Icon: {
    width: "5.07%",
    right: "28.79%",
    left: "66.13%",
  },
  image7Icon: {
    top: 745,
    left: 315,
    borderRadius: Border.br_31xl,
  },
  image8Icon: {
    height: 58,
    width: 55,
    borderRadius: Border.br_3xs,
    left: 15,
    top: 194,
    position: "absolute",
  },
  image10Icon: {
    top: 289,
    width: 55,
  },
  image11Icon: {
    top: 382,
    width: 48,
  },
  newspaperdark1Icon: {
    top: 747,
    left: 28,
  },
  viewMore: {
    top: 255,
  },
  viewMore1: {
    top: 348,
  },
  viewMore2: {
    top: 441,
  },
  questionCircleFill2Icon: {
    top: "34.38%",
    right: "23.32%",
    bottom: "26.56%",
    left: "69.39%",
    width: "7.29%",
    height: "39.06%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  eventsNewsAndInformationChild: {
    backgroundColor: Color.colorMidnightblue,
    left: 0,
    top: 0,
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
    left: 13,
    backgroundColor: Color.colorYellow,
    height: 4,
    width: 55,
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
  },
  bgIconPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  navbarMobile: {
    top: 728,
    left: 16,
  },
  eventsNewsAndInformationInner: {
    top: 803,
    left: 100,
    borderColor: Color.colorBlack,
    borderTopWidth: 5,
    width: 177,
    height: 5,
  },
  image12Icon: {
    borderRadius: Border.br_195xl,
    left: 0,
    top: 0,
  },
  logo: {
    top: 50,
    left: 318,
  },
  eventsNewsAndInformation: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default EventsNewsAndInformation;
