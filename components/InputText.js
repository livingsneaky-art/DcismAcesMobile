import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const InputText = ({
  name1,
  show,
  inputTextMarginTop,
  inputTextPosition,
  inputTextWidth,
  inputTextTop,
  inputTextRight,
  inputTextLeft,
  nameColor,
  showColor,
}) => {
  const inputTextStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", inputTextMarginTop),
      ...getStyleValue("position", inputTextPosition),
      ...getStyleValue("width", inputTextWidth),
      ...getStyleValue("top", inputTextTop),
      ...getStyleValue("right", inputTextRight),
      ...getStyleValue("left", inputTextLeft),
    };
  }, [
    inputTextMarginTop,
    inputTextPosition,
    inputTextWidth,
    inputTextTop,
    inputTextRight,
    inputTextLeft,
  ]);

  const nameStyle = useMemo(() => {
    return {
      ...getStyleValue("color", nameColor),
    };
  }, [nameColor]);

  const showStyle = useMemo(() => {
    return {
      ...getStyleValue("color", showColor),
    };
  }, [showColor]);

  return (
    <View style={[styles.inputtext, inputTextStyle]}>
      <Image
        style={styles.bgIcon}
        contentFit="cover"
        source={require("../assets/bg1.png")}
      />
      <Text style={[styles.name, styles.nameTypo, nameStyle]}>{name1}</Text>
      {!show && (
        <Text style={[styles.show, styles.nameTypo, showStyle]}>Show</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  nameTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    top: "50%",
    marginTop: -9,
    position: "absolute",
  },
  bgIcon: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  name: {
    left: 16,
    color: Color.colorSilver,
    textAlign: "left",
  },
  show: {
    right: 16,
    color: Color.colorMediumseagreen_100,
    textAlign: "right",
    display: "none",
  },
  inputtext: {
    width: 343,
    height: 50,
  },
});

export default InputText;
