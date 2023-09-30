import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PendingApplicationsSection = ({
  applicationStatus,
  jobTitle,
  developerJobTitle,
  propTop,
  propHeight,
}) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const rectangleIconStyle = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight),
    };
  }, [propHeight]);

  return (
    <View style={[styles.vectorParent, groupViewStyle]}>
      <Image
        style={[styles.groupChild, rectangleIconStyle]}
        contentFit="cover"
        source={require("../assets/rectangle-57.png")}
      />
      <Text style={styles.pendingApplications}>{applicationStatus}</Text>
      <View style={[styles.webDeveloperParent, styles.webLayout]}>
        <Text style={[styles.webDeveloper, styles.detailsTypo]}>
          {jobTitle}
        </Text>
        <Text style={[styles.details, styles.detailsTypo]}>Details</Text>
      </View>
      <View style={[styles.webDeveloperGroup, styles.webLayout]}>
        <Text style={[styles.webDeveloper, styles.detailsTypo]}>
          {developerJobTitle}
        </Text>
        <Text style={[styles.details, styles.detailsTypo]}>Details</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  webLayout: {
    height: 26,
    width: 300,
    position: "absolute",
  },
  detailsTypo: {
    fontSize: FontSize.size_base,
    height: 26,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 0,
    position: "absolute",
  },
  groupChild: {
    left: -4,
    borderRadius: Border.br_3xs,
    width: 348,
    height: 201,
    top: 0,
    position: "absolute",
  },
  pendingApplications: {
    top: 17,
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
    height: 63,
    width: 300,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 18,
    position: "absolute",
  },
  webDeveloper: {
    left: 0,
    color: Color.colorGray_200,
    width: 168,
  },
  details: {
    left: 241,
    color: Color.colorDodgerblue,
    width: 59,
  },
  webDeveloperParent: {
    top: 78,
    left: 18,
    height: 26,
  },
  webDeveloperGroup: {
    top: 140,
    left: 19,
  },
  vectorParent: {
    top: 194,
    left: 16,
    width: 340,
    height: 193,
    position: "absolute",
  },
});

export default PendingApplicationsSection;
