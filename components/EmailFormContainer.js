import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import InputText from "./InputText";

const EmailFormContainer = () => {
  return (
    <View style={[styles.frame, styles.frameFlexBox]}>
      <View style={styles.frameFlexBox}>
        <InputText
          name1="Email"
          show={false}
          inputTextMarginTop="unset"
          inputTextPosition="relative"
          inputTextWidth={343}
          inputTextTop="unset"
          inputTextRight="unset"
          inputTextLeft="unset"
          nameColor="#bdbdbd"
          showColor="#5db075"
        />
        <InputText
          name1="Password"
          show
          inputTextMarginTop={16}
          inputTextPosition="relative"
          inputTextWidth={343}
          inputTextTop="unset"
          inputTextRight="unset"
          inputTextLeft="unset"
          nameColor="#bdbdbd"
          showColor="#2e86ab"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "center",
    overflow: "hidden",
    width: 343,
  },
  frame: {
    position: "absolute",
    top: 125,
    left: 16,
  },
});

export default EmailFormContainer;
