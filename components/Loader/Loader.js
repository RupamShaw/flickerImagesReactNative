import React from "react";
import {ActivityIndicator, Dimensions, StyleSheet, View} from "react-native";
// type LoaderMode = "modal" | "inline";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
const BASE_PADDING = 6;

const renderLoader = (props ) => (
  <ActivityIndicator animating={props.loading} color={clickProps.color || "black"} />
);

export const Loader = (props) => {
  if (props.mode === "inline") {
    return renderLoader(props.loading);
  }
  if (props.loading) {
    return (
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          {renderLoader(props.loading)}
        </View>
      </View>
    );
  }
  return <View />;
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: BASE_PADDING * 6
  },
  activityIndicatorWrapper: {
    backgroundColor: "#FFFFFF",
    height: BASE_PADDING * 6,
    width: BASE_PADDING * 6,
    borderRadius: BASE_PADDING * 3, // indicator default size is 20
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 2
  }
});