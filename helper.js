// eslint-disable-next-line camelcase
const api_key = process.env.flicker_api_key

const data = (page, text = 'kitten') => {
  return {
    method: 'flickr.photos.search',
    // eslint-disable-next-line camelcase
    api_key,
    text, // : "kitten", // Search Text
    per_page: 21,
    page,
    format: 'json',
    nojsoncallback: 1,
  }
}

export const getURLOfPagination = page => {
  const parameters = new URLSearchParams(data(page))

  const url = `https://api.flickr.com/services/rest/?${parameters}`
  return url
}

export const getFlickrImageURL = (photo, size) => {
  let url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}`
  if (size) {
    // Configure image size
    url += `_${size}`
  }
  url += '.jpg'
  return url
}
