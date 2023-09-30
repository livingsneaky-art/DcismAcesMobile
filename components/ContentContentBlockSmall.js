import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ContentContentBlockSmall = ({
  header,
  hellWantToUseYourYachtAnd,
  contentContentBlockSmallPosition,
  contentContentBlockSmallTop,
  contentContentBlockSmallRight,
  contentContentBlockSmallLeft,
  hellWantToWidth,
}) => {
  const contentContentBlockSmallStyle = useMemo(() => {
    return {
      ...getStyleValue("position", contentContentBlockSmallPosition),
      ...getStyleValue("top", contentContentBlockSmallTop),
      ...getStyleValue("right", contentContentBlockSmallRight),
      ...getStyleValue("left", contentContentBlockSmallLeft),
    };
  }, [
    contentContentBlockSmallPosition,
    contentContentBlockSmallTop,
    contentContentBlockSmallRight,
    contentContentBlockSmallLeft,
  ]);

  const hellWantToStyle = useMemo(() => {
    return {
      ...getStyleValue("width", hellWantToWidth),
    };
  }, [hellWantToWidth]);

  return (
    <View
      style={[styles.contentcontentBlocksmall, contentContentBlockSmallStyle]}
    >
      <View style={[styles.contentBlock, styles.headerPosition]} />
      <Text style={[styles.header, styles.headerFlexBox]}>{header}</Text>
      <Text style={[styles.mAgo, styles.mAgoTypo]}>8m ago</Text>
      <Text style={[styles.hellWantTo, styles.mAgoTypo, hellWantToStyle]}>
        {hellWantToUseYourYachtAnd}
      </Text>
      <View style={styles.dividerLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerPosition: {
    top: 0,
    position: "absolute",
  },
  headerFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    left: 66,
  },
  mAgoTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  contentBlock: {
    left: 0,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 50,
    height: 50,
  },
  header: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.uI30Semi,
    top: 0,
    position: "absolute",
  },
  mAgo: {
    top: 2,
    color: Color.colorSilver,
    textAlign: "right",
    right: 0,
  },
  hellWantTo: {
    top: 27,
    width: 254,
    textAlign: "left",
    color: Color.colorBlack,
    left: 66,
  },
  dividerLine: {
    bottom: 0,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderTopWidth: 1,
    height: 1,
    right: 0,
    left: 66,
    position: "absolute",
  },
  contentcontentBlocksmall: {
    height: 77,
  },
});

export default ContentContentBlockSmall;
