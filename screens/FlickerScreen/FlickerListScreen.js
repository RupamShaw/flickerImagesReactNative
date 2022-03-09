import React from 'react';
import {Text, Loader} from '../../components'
import {ImagesList} from '../../components/ImagesList/ImagesList'

export default function FlickerListScreen(props) {
  
  if (props.errorMessage && !props.isLoading) {
    return <Text title ={props.errorMessage} color="red" />
  }
  
  if (props.isLoading) {
  return (
    <Loader />)
  }
  return <ImagesList data={props.imageUrls} onPagination={ props.onPagination}/>

}