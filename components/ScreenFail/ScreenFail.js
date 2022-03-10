import React from 'react'
import {View} from 'react-native'
import {Button} from '../Button/Button'
import {Section} from '../Section/Section'
import {Text} from '../Text/Text'

export function ScreenFail(props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <Section first>
        <Text color="warning" size="large" center>
          {props.message || 'Unable to load screen.'}
        </Text>
      </Section>
      {props.onRetry && (
        <Section>
          <Button title="Retry" onPress={props.onRetry} />
        </Section>
      )}
    </View>
  )
}
