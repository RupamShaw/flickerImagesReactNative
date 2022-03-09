import React from "react";
import {  View } from "react-native";

export const SECTION_PADDING = 18;

export const Section =(props) => {
  const backgroundColor = props.background ? props.background: "#FFFF"

  return (
    <View
      style={[
        {
          paddingHorizontal: props.pullout ? 0 : SECTION_PADDING,
          paddingBottom: SECTION_PADDING,
          paddingTop: props.first ? SECTION_PADDING : 0,
          backgroundColor
        },
        props.style
      ]}
    >
      {props.children}
    </View>
  );
}
