import {SafeAreaView} from 'react-native'
import {Text} from './components'
import {FlickerListScreenState} from './screens'

export default function App() {
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
