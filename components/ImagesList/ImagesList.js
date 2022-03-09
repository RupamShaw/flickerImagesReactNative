import React from "react"
import {FlatList, View, Dimensions, StyleSheet} from "react-native"
import {Image} from "../Image/Image"
import {Text} from "../Text/Text"
import {Section} from "../Section/Section"

const windowWidth = Dimensions.get("window").width

const ListFooterComponent = () => {
  // TODO: move to top button
  return (
    <View
      style={{
        height: 60,
        marginBottom: 60,
        // color: 'red',
        // borderColor: 'brown',
        // borderWidth: 2,
      }}
    />
  )
}

const gridRenderItem = ({item, index}) => {
  return (
    <View key={index} style={{paddingHorizontal: 5, width: windowWidth / 3}}>
      <Section>
        <Image key={index + " " + index + " " + index} source={item} />
        {/* <Text key={index+" "+index} title={item}/> */}
      </Section>
    </View>
  )
}

const keyExtractor = (item, index) => {
  return `${item.id}${index}`
}

const ItemSeparatorComponent =() => <View style={styles.separator} />

export function ImagesList(props) {
  console.log(`total images count ${props.data.length}`)

  const handleLoadMoreData = ({distanceFromEnd}) => {
    if (distanceFromEnd < 0) return
    props.onPagination()
  }

  return (
    <View style={{flex: 1}}>
      <FlatList
        removeClippedSubviews={false}
        // maxToRenderPerBatch={6}
        // initialNumToRender={20}
        // scrollEventThrottle={16}
        // windowSize={6}
        numColumns={3}
        // refreshControl={
        //   <RefreshControl
        //     refreshing={props.refreshing}
        //     onRefresh={props.onRefresh}
        //   />
        // }
        key="grid"
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListFooterComponent={ListFooterComponent}
        data={props.data}
        // contentContainerStyle={{paddingBottom: 50}}
        renderItem={gridRenderItem}
        scrollEnabled
        // ref={flatListRef}
        listKey="mainpgrid"
        nestedScrollEnabled // overlay
        // getItemLayout={getItemLayout}
        // onScrollToIndexFailed={scrollToIndexFailed}
        keyExtractor={keyExtractor}
        onEndReachedThreshold={0.5}
        onEndReached={handleLoadMoreData} // later use for paging
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  item: {
    padding: 10,height:80
  },
  separator: {
    height: 0.5,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  text: {
    fontSize: 15,
    color: 'black',
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: '#800000',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});

