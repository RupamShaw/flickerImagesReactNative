import React from 'react'
import {shallow} from 'enzyme'
import {Text as NativeText} from 'react-native'
import {Text} from './Text'

const testProps = {title: 'test'}

describe('<Text>', () => {
  let textProps

  beforeEach(() => {
    const wrapper = shallow(<Text {...testProps} />)
    textProps = wrapper.find(NativeText).props()
  })

  it('should have title and set title', async () => {
    expect(textProps.children).toBe(testProps.title)
  })
})
