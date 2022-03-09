import React, { useState, useEffect } from 'react';

import {getURLOfPagination, getFlickrImageURL} from "../../helper"
import {Image_Fetch_Issues} from "../../messages"
import axios from 'axios' 

import FlickerListScreen from './FlickerListScreen'

export default function FlickerListScreenState() {

  const [imageUrls, setImageUrls] = useState([]);
  const [errorMessage, setErrorMessage] = useState("")
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  
  const handlePagination = () => {
    //TODO: max page reached 
    setPage(page+1)
  }

  useEffect(() => { 
    const getImages = async (url) => {
      try {
        const data = await axios.get(url)
        const dataImageUrls = data.data.photos.photo.map((photo) => {
          return getFlickrImageURL(photo, 'q');
        })

        setImageUrls([...imageUrls,...dataImageUrls])
      } catch (err) {
        setErrorMessage(Image_Fetch_Issues)
      }
      setIsLoading(false)
    }

    getImages(getURLOfPagination(page))   
  },[page])

  return <FlickerListScreen imageUrls={imageUrls} errorMessage={errorMessage} isLoading={isLoading} page={ page} onPagination={handlePagination}/>
}
