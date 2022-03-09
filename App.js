import { View, SafeAreaView } from "react-native";
import {Text} from './components'
import FlicketListScreenState from './screens/FlickerScreen/FlickerListScreenState'
export default function App() {

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "flexStart",
        alignItems: "center",
      }}
    >
      <Text title="Flickr Images" />
      <FlicketListScreenState />
    </SafeAreaView>
  );
}
