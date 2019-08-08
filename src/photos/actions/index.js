import {fetchPhotos, orderFavorites} from '../../services/api'

export const loadPhotos = () => {
  return (dispatch) => {
    dispatch({type: 'PHOTOS@PHOTOS_LOADING'})

    fetchPhotos().then((data) => {
      const photos = data.photos.reduce((photos, photo) => {
        photos[photo.id] = photo
        return photos
      }, {})

      dispatch({
        type: 'PHOTOS@FETCH_SUCCESS',
        payload: photos
      })
    })
  }
}

export const toggleMarkAsFavorite = ({id}) => {
  return (dispatch, getState) => {
    const store = getState()
    const favoritesPhotos = store.favoritesPhotos

    if (favoritesPhotos[id]) {
      dispatch({
        type: 'PHOTOS@REMOVE_FROM_FAVORITE',
        payload: {
          photoId: id
        }
      })
    }
    else {
      dispatch({
        type: 'PHOTOS@MARK_AS_FAVORITE',
        payload: {
          photoId: id
        }
      })
    }
  }
}

export const postOrderFavorites = (order) => {
  return (dispatch) => {
    return orderFavorites(order).then((data) => {
      dispatch({
        type: 'PHOTOS@ORDER_SUCCESS'
      })
    })
  }
}

export const removeFavorites = () => {
  return {
    type: 'PHOTOS@DELETE_ALL_FAVORITE'
  }
}
