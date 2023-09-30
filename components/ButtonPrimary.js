import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ButtonPrimary = ({
  clickMe,
  buttonPrimaryPosition,
  buttonPrimaryBackgroundColor,
  buttonPrimaryWidth,
  buttonPrimaryTop,
  buttonPrimaryLeft,
  buttonPrimaryRight,
  buttonPrimaryBottom,
  buttonPrimaryBorderStyle,
  buttonPrimaryBorderColor,
  buttonPrimaryBorderWidth,
  clickMeColor,
  clickMeTextAlign,
  onButtonPrimaryPress,
}) => {
  const buttonPrimaryStyle = useMemo(() => {
    return {
      ...getStyleValue("position", buttonPrimaryPosition),
      ...getStyleValue("backgroundColor", buttonPrimaryBackgroundColor),
      ...getStyleValue("width", buttonPrimaryWidth),
      ...getStyleValue("top", buttonPrimaryTop),
      ...getStyleValue("left", buttonPrimaryLeft),
      ...getStyleValue("right", buttonPrimaryRight),
      ...getStyleValue("bottom", buttonPrimaryBottom),
      ...getStyleValue("borderStyle", buttonPrimaryBorderStyle),
      ...getStyleValue("borderColor", buttonPrimaryBorderColor),
      ...getStyleValue("borderWidth", buttonPrimaryBorderWidth),
    };
  }, [
    buttonPrimaryPosition,
    buttonPrimaryBackgroundColor,
    buttonPrimaryWidth,
    buttonPrimaryTop,
    buttonPrimaryLeft,
    buttonPrimaryRight,
    buttonPrimaryBottom,
    buttonPrimaryBorderStyle,
    buttonPrimaryBorderColor,
    buttonPrimaryBorderWidth,
  ]);

  const clickMeStyle = useMemo(() => {
    return {
      ...getStyleValue("color", clickMeColor),
      ...getStyleValue("textAlign", clickMeTextAlign),
    };
  }, [clickMeColor, clickMeTextAlign]);

  return (
    <View
      style={[styles.buttonprimary, buttonPrimaryStyle]}
      onPress={onButtonPrimaryPress}
    >
      <Text style={[styles.clickMe, clickMeStyle]}>{clickMe}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  clickMe: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.uI30Semi,
    color: Color.colorWhite,
    textAlign: "center",
  },
  buttonprimary: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorMediumseagreen_100,
    alignItems: "center",
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_base,
  },
});

export default ButtonPrimary;
