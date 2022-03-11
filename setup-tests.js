// setup-tests.js
import 'react-native'
// eslint-disable-next-line import/no-extraneous-dependencies
import 'jest-enzyme'

// eslint-disable-next-line import/no-extraneous-dependencies
import Adapter from 'enzyme-adapter-react-16'
// eslint-disable-next-line import/no-extraneous-dependencies
import Enzyme from 'enzyme'
// global.fetch = require("jest-fetch-mock");
/**
 * Set up DOM in node.js environment for Enzyme to mount to
 */
// eslint-disable-next-line import/no-extraneous-dependencies
const {JSDOM} = require('jsdom')

const jsdom = new JSDOM('<!doctype html><html><body></body></html>')
const {window} = jsdom

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  })
}
// eslint-disable-next-line no-unused-vars
window.alert = msg => {
  // console.log(msg);
}
window.matchMedia = () => ({})
window.scrollTo = () => {}
global.window = window
global.document = window.document
global.navigator = {
  userAgent: 'node.js',
}
copyProps(window, global)

/**
 * react-native-device-info contains native code, and needs to be mocked. Jest Snapshot support may work though.
 */
jest.mock('react-native-device-info', () => {
  return {
    getBrand: jest.fn(() => 'Apple'), // test return ios for the default device
    getDeviceCountry: jest.fn(() => 'AU'), // test return AU for the default device country
  }
})

/**
 * Set up Enzyme to mount to DOM, simulate events,
 * and inspect the DOM in tests.
 */
Enzyme.configure({adapter: new Adapter()})
/**
 * Ignore some expected warnings
 * see: https://jestjs.io/docs/en/tutorial-react.html#snapshot-testing-with-mocks-enzyme-and-react-16
 * see https://github.com/Root-App/react-native-mock-render/issues/6
 */
// eslint-disable-next-line no-console
const originalConsoleError = console.error
// eslint-disable-next-line no-console
console.error = message => {
  if (message.startsWith('Warning:')) {
    return
  }

  originalConsoleError(message)
}
