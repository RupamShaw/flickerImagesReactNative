// eslint-disable-next-line import/no-extraneous-dependencies
import {action} from '@storybook/addon-actions'
// eslint-disable-next-line import/no-extraneous-dependencies
import {text} from '@storybook/addon-knobs'
// eslint-disable-next-line import/no-extraneous-dependencies
import {storiesOf} from '@storybook/react-native'
import React from 'react'
import {Text} from 'react-native'
import Button from '.'
// import CenterView from '../CenterView'

storiesOf('Button', module)
  // .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>{text('Button text', 'Hello Button')}</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ))
