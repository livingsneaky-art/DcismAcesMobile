import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const InputSearch = ({
  search,
  iconSend,
  inputSearchPosition,
  inputSearchTop,
  inputSearchRight,
  inputSearchLeft,
}) => {
  const inputSearchStyle = useMemo(() => {
    return {
      ...getStyleValue("position", inputSearchPosition),
      ...getStyleValue("top", inputSearchTop),
      ...getStyleValue("right", inputSearchRight),
      ...getStyleValue("left", inputSearchLeft),
    };
  }, [inputSearchPosition, inputSearchTop, inputSearchRight, inputSearchLeft]);

  return (
    <View style={[styles.inputsearch, inputSearchStyle]}>
      <Image
        style={styles.bgIcon}
        contentFit="cover"
        source={require("../assets/bg.png")}
      />
      <Text style={[styles.search, styles.searchPosition]}>{search}</Text>
      <Image
        style={[styles.iconsend, styles.searchPosition]}
        contentFit="cover"
        source={iconSend}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchPosition: {
    top: "50%",
    position: "absolute",
  },
  bgIcon: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_81xl,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  search: {
    marginTop: -9,
    left: 16,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorSilver,
    textAlign: "left",
  },
  iconsend: {
    marginTop: -17,
    right: 8,
    width: 34,
    height: 34,
    display: "none",
  },
  inputsearch: {
    height: 50,
  },
});

export default InputSearch;
