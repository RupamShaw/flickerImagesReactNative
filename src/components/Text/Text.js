/**
 * @jest-environment jsdom
 */
import {Text as NativeText} from 'react-native'

export function Text(props) {
  return (
    <NativeText
      style={{
        color: props.color || 'black',
        fontSize: props.size || 12,
        textAlign: props.center ? 'center' : 'auto',
        fontWeight: props.bold ? 'bold' : 'normal',
        textDecorationLine: props.textDecorationLine || 'none',
      }}
    >
      {props.title}
    </NativeText>
  )
}
