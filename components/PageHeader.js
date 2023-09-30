import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PageHeader = ({
  left,
  signUp,
  iconX,
  right,
  showLeft,
  showSignUp,
  showRight,
  pageHeaderPosition,
  pageHeaderWidth,
  pageHeaderTop,
  pageHeaderLeft,
  pageHeaderRight,
  signUpMarginLeft,
  signUpFontSize,
  rightColor,
  onPageHeaderPress,
}) => {
  const pageHeaderStyle = useMemo(() => {
    return {
      ...getStyleValue("position", pageHeaderPosition),
      ...getStyleValue("width", pageHeaderWidth),
      ...getStyleValue("top", pageHeaderTop),
      ...getStyleValue("left", pageHeaderLeft),
      ...getStyleValue("right", pageHeaderRight),
    };
  }, [
    pageHeaderPosition,
    pageHeaderWidth,
    pageHeaderTop,
    pageHeaderLeft,
    pageHeaderRight,
  ]);

  const signUpStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", signUpMarginLeft),
      ...getStyleValue("fontSize", signUpFontSize),
    };
  }, [signUpMarginLeft, signUpFontSize]);

  const rightStyle = useMemo(() => {
    return {
      ...getStyleValue("color", rightColor),
    };
  }, [rightColor]);

  return (
    <View
      style={[styles.pageHeader, pageHeaderStyle]}
      onPress={onPageHeaderPress}
    >
      {showLeft && <Text style={[styles.left, styles.leftTypo]}>{left}</Text>}
      {showSignUp && <Text style={[styles.signUp, signUpStyle]}>{signUp}</Text>}
      <Image
        style={[styles.iconx, styles.iconxPosition]}
        contentFit="cover"
        source={iconX}
      />
      {showRight && (
        <Text style={[styles.right, styles.iconxPosition, rightStyle]}>
          {right}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  leftTypo: {
    color: Color.colorMediumseagreen_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  iconxPosition: {
    left: 0,
    position: "absolute",
  },
  left: {
    top: 8,
    right: 0,
    textAlign: "right",
    position: "absolute",
  },
  signUp: {
    marginLeft: -55,
    top: 0,
    left: "50%",
    fontSize: FontSize.uI30Semi_size,
    fontWeight: "600",
    fontFamily: FontFamily.uI30Semi,
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  iconx: {
    top: 16,
    width: 16,
    height: 16,
    display: "none",
  },
  right: {
    marginTop: -10,
    top: "50%",
    textAlign: "left",
    color: Color.colorMediumseagreen_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  pageHeader: {
    width: 258,
    height: 36,
  },
});

export default PageHeader;
