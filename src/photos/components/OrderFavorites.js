import React, {Component} from 'react'
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'

import {postOrderFavorites} from '../actions'
import {checkIfMailValid} from '../../app/commons/utils'

const MAX_NOTE_CHARS_COUNT = 300

class OrderFavorites extends Component {
  state = {
    order: {
      email: '',
      favorites: [],
      notes: ''
    },
    validationErrorMessage: '',
    invalidField: ''
  }

  createOnChangeCallback = (fieldName) => {
    return (e) => {
      const {order} = this.state

      this.setState({
        order: {
          ...order,
          [fieldName]: e.target.value
        }
      })
    }
  }

  handleOnClickCallback = () => {
    const {postOrderFavorites} = this.props
    const {order} = this.state

    this.setState({
      validationErrorMessage: '',
      invalidField: ''
    })

    if (this.validateForm()) {
      postOrderFavorites(order)
    }
  }

  validateForm = () => {
    const {order: {email, favorites, notes}} = this.state
    const isMailValid = checkIfMailValid(email)
    const isFavoritesValid = favorites.length !== 0
    const isNotesValid = notes.length <= MAX_NOTE_CHARS_COUNT
    let isValid = true

    if (!isMailValid) {
      this.setState({
        validationErrorMessage: 'Please insert valid mail',
        invalidField: 'email'
      })
      isValid = false
    } else if (!isFavoritesValid) {
      this.setState({
        validationErrorMessage: 'Please choose at least one favorite',
        invalidField: 'favorites'
      })
      isValid = false
    } else if (!isNotesValid) {
      this.setState({
        validationErrorMessage: `Please insert notes with less than ${MAX_NOTE_CHARS_COUNT} characters`,
        invalidField: 'notes'
      })
      isValid = false
    }

    return isValid
  }

  render() {
    const {order, validationErrorMessage, invalidField} = this.state
    const {favoritesPhotos, isOrderSuccess} = this.props

    const fieldStyle = {width: '230px'}

    return (
      <div className='order-favorites-page'>
        <div className='title'>Order Favorites</div>
        <div className='form-container'>
          <TextField
            id='email'
            label='Email'
            error={invalidField === 'email'}
            value={order.email}
            style={fieldStyle}
            onChange={this.createOnChangeCallback('email')}
          />
          <div className="favorites-select-container">
            <InputLabel htmlFor="select-multiple">Favorites</InputLabel>
            <Select
              multiple
              value={order.favorites}
              error={invalidField === 'favorites'}
              input={<Input id="select-multiple" />}
              style={{...fieldStyle, height: '60px'}}
              onChange={this.createOnChangeCallback('favorites')}
            >
              {favoritesPhotos && Object.keys(favoritesPhotos).map(favorite => {
                return <MenuItem key={favorite} value={favorite}>{favorite}</MenuItem>
              })}
            </Select>
          </div>
          <TextField
            id='notes'
            label='Notes'
            error={invalidField === 'notes'}
            value={order.notes}
            style={fieldStyle}
            multiline={true}
            rows="4"
            onChange={this.createOnChangeCallback('notes')}
          />
          <Button
            className='order-button'
            variant='contained'
            color='primary'
            onClick={this.handleOnClickCallback}
          >
            Order
          </Button>
          {
            isOrderSuccess &&
            !validationErrorMessage &&
              <div className='message'>
                Order Success!!!
              </div>
          }

          {validationErrorMessage && <div className="message">{validationErrorMessage}</div>}
         </div>
       </div>
    )
  }
}

const mapStateToProps = (store) =>{
  return {
    favoritesPhotos: store.favoritesPhotos,
    isOrderSuccess: store.isOrderSuccess
  }
}

const mapDispatchToProps = {postOrderFavorites}

export default connect(mapStateToProps, mapDispatchToProps)(OrderFavorites)
