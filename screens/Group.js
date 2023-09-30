import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import EventsNewsAndInformation from "./EventsNewsAndInformation";

const Group = () => {
  return (
    <View style={styles.eventsNewsAndInformationParent}>
      <EventsNewsAndInformation />
    </View>
  );
};

const styles = StyleSheet.create({
  eventsNewsAndInformationParent: {
    flex: 1,
    width: "100%",
    height: 812,
  },
});

export default Group;
