import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import {storiesOf} from '@storybook/react-native'
import {Image} from '../../../src/components/Image/Image'

storiesOf('Image', module).add('with Image', () => (
  <Image source="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" />
))
