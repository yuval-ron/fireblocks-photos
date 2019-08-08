import React, {Component} from 'react'

export default class PhotoItem extends Component {
  handleMarkAsFavoriteClick = () => {
    const {toggleMarkAsFavorite, photo} = this.props

    toggleMarkAsFavorite(photo)
  }

  render() {
    const {isFavoritePhoto, photo: {title, id, thumbnailUrl}} = this.props

    return (
      <div className='photo-item'>
        <div className="photo-container">
          <div className={`favorite-button ${isFavoritePhoto ? 'favorite' : null}`} onClick={this.handleMarkAsFavoriteClick}></div>
          <img key={id} alt="" className="photo-element" src={thumbnailUrl} />
        </div>
        <div className='title'>{title}</div>
      </div>
    )
  }
}
