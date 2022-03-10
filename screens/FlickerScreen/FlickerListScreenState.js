import React, {useState, useEffect} from 'react'

import axios from 'axios'
import {getURLOfPagination, getFlickrImageURL} from '../../helper'
import {ImageFetchIssues} from '../../messages'

import {FlickerListScreen} from './FlickerListScreen'

export function FlickerListScreenState() {
  const [imageUrls, setImageUrls] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  const handlePagination = () => {
    // TODO: max page reached
    setPage(page + 1)
  }

  useEffect(() => {
    const getImages = async url => {
      try {
        const data = await axios.get(url)
        const dataImageUrls = data.data.photos.photo.map(photo => {
          return getFlickrImageURL(photo, 'q')
        })

        setImageUrls([...imageUrls, ...dataImageUrls])
      } catch (err) {
        setErrorMessage(ImageFetchIssues)
      }
      setIsLoading(false)
    }

    getImages(getURLOfPagination(page))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return (
    <FlickerListScreen
      imageUrls={imageUrls}
      errorMessage={errorMessage}
      isLoading={isLoading}
      page={page}
      onPagination={handlePagination}
    />
  )
}
