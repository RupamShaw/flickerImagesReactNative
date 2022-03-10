import {Text as NativeText} from 'react-native'

export function Text(props) {
  return (
    <NativeText
      style={{
        color: props.color || 'black',
        fontSize: props.size || 12,
        textAlign: props.center ? 'center' : 'auto',
        fontWeight: props.bold ? 'bold' : 'normal',
        // fontFamily: props.font || 'Times',
        textDecorationLine: props.textDecorationLine || 'none',
      }}
      // onPress={props.onPress}
      // ellipsizeMode={props.ellipsizeMode}
      // numberOfLines={props.numberOfLines}
      // allowFontScaling={props.allowFontScaling}
    >
      {props.title}
    </NativeText>
  )
}
