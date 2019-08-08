import React, {Component} from 'react'

export default class Navbar extends Component {
  createGoToCallback = (path) => {
    return () => {
      const {goToPath} = this.props

      goToPath(path)
    }
  }

  render() {
    return (
      <div className='main-actions-container'>
        <div className='action-button' onClick={this.createGoToCallback('photos')}>Photos</div>
        <div className='action-button' onClick={this.createGoToCallback('favorites')}>Favorites</div>
        <div className='action-button' onClick={this.createGoToCallback('order-favorites')}>Order Favorites</div>
      </div>
    )
  }
}
