import React from 'react'
import {StyleSheet, View} from 'react-native'

import Touchable from 'react-native-platform-touchable'

import {Text} from '../Text/Text'
import {Image} from '../Image/Image'

export function Button(props) {
  const textColor = props.color ? props.color : 'black'
  return (
    <Touchable
      onPress={props.onPress}
      style={[
        style.btn,
        props.primary && {
          backgroundColor: props.backgroundColor || 'white',
        },
        !props.square && {
          borderRadius: 2,
        },
        !props.primary && {
          // border width set by button list
          borderWidth: props.borderWidth || 0, // no border by default
        },
      ]}
      disabled={props.disabled}
      activeOpacity={props.noTouchFeedback ? 1 : 0.2}
    >
      {props.children || (
        <View
          style={{
            flex: 1,
            opacity: props.disabled ? 0.5 : 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {props.icon && (
            <View
              style={{
                paddingRight: 6,
              }}
            >
              <Image src={props.src} style={{width: 30, height: 30}} />
            </View>
          )}
          <View style={{flexShrink: 1}}>
            <Text
              // size="large"
              color={textColor}
              center
              allowFontScaling={false}
            >
              {props.title || ''}
            </Text>
          </View>
        </View>
      )}
    </Touchable>
  )
}

const style = StyleSheet.create({
  btn: {
    padding: 12,
    flexDirection: 'row',
  },
})
