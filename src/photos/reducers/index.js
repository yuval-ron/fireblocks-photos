const defaultState = {
  photos: {},
  favoritesPhotos: {},
  isLoadingPhotos: false,
  isOrderSuccess: false
}

export default (state = defaultState, {type, payload}) => {
  switch (type) {
    case 'PHOTOS@PHOTOS_LOADING': {
      return {
        ...state,
        isLoadingPhotos: true
      }
    }
    case 'PHOTOS@FETCH_SUCCESS': {
      return {
        ...state,
        photos: payload,
        isLoadingPhotos: false
      }
    }
    case 'PHOTOS@MARK_AS_FAVORITE': {
      return {
        ...state,
        favoritesPhotos: {
          ...state.favoritesPhotos,
          [payload.photoId]: true
        }
      }
    }
    case 'PHOTOS@REMOVE_FROM_FAVORITE': {
      let favoritesPhotos = {...state.favoritesPhotos}
      Reflect.deleteProperty(favoritesPhotos, payload.photoId)

      return {
        ...state,
        favoritesPhotos
      }
    }
    case 'PHOTOS@DELETE_ALL_FAVORITE': {
      return {
        ...state,
        favoritesPhotos: {}
      }
    }
    case 'PHOTOS@ORDER_SUCCESS': {
      return {
        ...state,
        isOrderSuccess: true
      }
    }
    default: {
      return state
    }
  }
}
