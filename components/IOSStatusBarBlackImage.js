import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const IOSStatusBarBlackImage = ({
  iOSStatusBarBlackImageIOS,
  iOSStatusBarBlackIconPosition,
  iOSStatusBarBlackIconTop,
  iOSStatusBarBlackIconRight,
  iOSStatusBarBlackIconLeft,
  iOSStatusBarBlackIconMaxWidth,
}) => {
  const iOSStatusBarBlackIconStyle = useMemo(() => {
    return {
      ...getStyleValue("position", iOSStatusBarBlackIconPosition),
      ...getStyleValue("top", iOSStatusBarBlackIconTop),
      ...getStyleValue("right", iOSStatusBarBlackIconRight),
      ...getStyleValue("left", iOSStatusBarBlackIconLeft),
      ...getStyleValue("maxWidth", iOSStatusBarBlackIconMaxWidth),
    };
  }, [
    iOSStatusBarBlackIconPosition,
    iOSStatusBarBlackIconTop,
    iOSStatusBarBlackIconRight,
    iOSStatusBarBlackIconLeft,
    iOSStatusBarBlackIconMaxWidth,
  ]);

  return (
    <Image
      style={[styles.iosstatusBarblackIcon, iOSStatusBarBlackIconStyle]}
      contentFit="cover"
      source={iOSStatusBarBlackImageIOS}
    />
  );
};

const styles = StyleSheet.create({
  iosstatusBarblackIcon: {
    height: 44,
    overflow: "hidden",
  },
});

export default IOSStatusBarBlackImage;
