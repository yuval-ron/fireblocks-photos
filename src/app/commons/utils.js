export const getRandomPhotos = (photos) => {
  const selectedPhotos = []

  while (selectedPhotos.length < 100) {
    const currentRandomIndex = parseInt(Math.random() * photos.length)
    selectedPhotos.push(photos[currentRandomIndex])

    // Removing the selected photo from the array
    photos.splice(currentRandomIndex, 1)
  }

  return selectedPhotos
}

export const checkIfMailValid = (mail) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail)
}
