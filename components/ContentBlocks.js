import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const JobFairCard = () => {
  return (
    <View style={styles.contentBlocks}>
      <View
        style={[styles.contentcontentBlocksmall, styles.contentcontentPosition]}
      >
        <View style={[styles.contentBlock, styles.inputsearchLayout]} />
        <Text style={[styles.header, styles.feedTypo, styles.headerClr]}>
          Job Fair on March 24, 2024
        </Text>
        <Text style={[styles.mAgo, styles.mAgoTypo]}>8m ago</Text>
        <Text
          style={[styles.hellWantTo, styles.mAgoTypo, styles.headerClr]}
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
          style={[styles.header, styles.feedTypo, styles.headerClr]}
        >{`DCISM Office closed on... `}</Text>
        <Text style={[styles.mAgo, styles.mAgoTypo]}>8m ago</Text>
        <Text
          style={[styles.hellWantTo, styles.mAgoTypo, styles.headerClr]}
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
        <Text style={[styles.header, styles.feedTypo, styles.headerClr]}>
          New batch of Alumni added
        </Text>
        <Text style={[styles.mAgo, styles.mAgoTypo]}>8m ago</Text>
        <Text
          style={[styles.hellWantTo, styles.mAgoTypo, styles.headerClr]}
        >{`The Department of Computer & Information Sciences and Mathem...`}</Text>
        <View style={[styles.dividerLine, styles.dividerLineBorder]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerClr: {
    color: Color.colorBlack,
    textAlign: "left",
    left: 66,
  },
  contentBlock: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 50,
    left: 0,
    top: 0,
  },
  header: {
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
  },
  dividerLine: {
    bottom: 0,
    borderColor: Color.colorGainsboro_100,
    borderTopWidth: 1,
    height: 1,
    borderStyle: "solid",
    right: 0,
    left: 66,
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
});

export default JobFairCard;
