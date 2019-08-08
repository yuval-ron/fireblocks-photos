import React, {Component} from 'react'
import {connect} from 'react-redux'
import {toggleMarkAsFavorite} from '../actions'

import PhotoItem from './PhotoItem'

class Photos extends Component {
  render() {
    const {photos, isLoadingPhotos, toggleMarkAsFavorite, favoritesPhotos} = this.props

    return (
      <div className='photos-container'>
        {
          isLoadingPhotos &&
            <div className="message loading-message">loading...</div>
        }
        {
          photos &&
            Object.keys(photos).map((photoKey, index) => {
              const photo = photos[photoKey]
              const isFavoritePhoto = !!favoritesPhotos[photoKey]

              return <PhotoItem
                      key={index}
                      photo={photo}
                      toggleMarkAsFavorite={toggleMarkAsFavorite}
                      isFavoritePhoto={isFavoritePhoto}
                     />
            })
        }
      </div>
    )
  }
}

const mapStateToProps = (store) =>{
  return {
    photos: store.photos,
    favoritesPhotos: store.favoritesPhotos,
    isLoadingPhotos: store.isLoadingPhotos
  }
}

const mapDispatchToProps = {toggleMarkAsFavorite}

export default connect(mapStateToProps, mapDispatchToProps)(Photos)
