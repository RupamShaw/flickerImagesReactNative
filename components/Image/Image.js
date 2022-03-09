import React from "react";
import {Image as NativeImage} from 'react-native'

export const Image = (props) => {
  return (<NativeImage style={{width:100,height:100} } source={{uri: props.source}}/>)
}