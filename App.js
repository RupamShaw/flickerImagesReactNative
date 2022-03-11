import {SafeAreaView} from 'react-native'
import {Text} from './src/components'
import {FlickerListScreenState} from './src/screens'
// import Story from './storybook'

export default function App() {
  // return <Story />

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'flexStart',
        alignItems: 'center',
      }}
    >
      <Text title="Flickr Images" />
      <FlickerListScreenState />
    </SafeAreaView>
  )
}
