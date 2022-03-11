import React from 'react'
import renderer from 'react-test-renderer'
import {Button} from './Button'

const testProps = {}

// eslint-disable-next-line jest/no-disabled-tests
it.skip('renders correctly snapshots', () => {
  const component = renderer.create(<Button {...testProps} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
