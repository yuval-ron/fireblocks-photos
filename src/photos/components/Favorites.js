import React, {Component} from 'react'
import {connect} from 'react-redux'
import {toggleMarkAsFavorite, removeFavorites} from '../actions'

import PhotoItem from './PhotoItem'

class Favorites extends Component {
  handleRemoveAllFavorites = () => {
    const {removeFavorites} = this.props

    removeFavorites()
  }

  render() {
    const {photos, favoritesPhotos, toggleMarkAsFavorite} = this.props

    return (
      <div className='favorites-page'>
        <div className='remove-all' onClick={this.handleRemoveAllFavorites}>Remove all favorites</div>
        <FavoritesPhotos photos={photos} favoritesPhotos={favoritesPhotos} toggleMarkAsFavorite={toggleMarkAsFavorite} />
      </div>
    )
  }
}

const mapStateToProps = (store) =>{
  return {
    favoritesPhotos: store.favoritesPhotos,
    photos: store.photos
  }
}

const mapDispatchToProps = {toggleMarkAsFavorite, removeFavorites}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)

const FavoritesPhotos = ({photos, favoritesPhotos, toggleMarkAsFavorite}) => {
  return (
    <div className="favorites-photos-container">
    {
      Object.keys(favoritesPhotos).map((photoId, index) => {
        const photo = photos[photoId]

        return <PhotoItem key={index} isFavoritePhoto={true} photo={photo} toggleMarkAsFavorite={toggleMarkAsFavorite} />
      })
    }
    </div>
  )
}
