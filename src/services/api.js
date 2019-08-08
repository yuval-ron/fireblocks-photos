import {getRandomPhotos} from '../app/commons/utils'

export const fetchPhotos = () => {
  const urlForSearch = `https://jsonplaceholder.typicode.com/photos`

  return fetch(urlForSearch)
    .then(response => response.json())
    .then(data => {
      return {
        photos: getRandomPhotos(data)
      }
    })
    .catch(error => console.error(error))
}

export const orderFavorites = ({email, favorites, notes}) => {
  const urlForPost = `https://reqres.in/api/users`
  const payload = {email, favorites, notes}

  return fetch(urlForPost, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.json()
  })
  .then(response => console.log('Success:', JSON.stringify(response)))
  .catch(error => console.error('Error:', error));
}
