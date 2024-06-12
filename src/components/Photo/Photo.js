import './Photo.css'

export const parsePhotos = (rawPhotos) => {
   if (!rawPhotos) return false

   const parsedPhotosArray = []
   const uniquePhotos = new Set()

   rawPhotos.forEach((photo) => {
      if (uniquePhotos.has(photo.id)) return
      uniquePhotos.add(photo.id)

      const parsedPhoto = {}

      parsedPhoto.src = photo.urls.raw
      parsedPhoto.author = photo.user.name
      parsedPhoto.alt = photo.alt_description
      parsedPhoto.referalAuthor = `https://unsplash.com/@${photo.user.username}?utm_source=gallery&utm_medium=referral`
      parsedPhoto.socials = photo.user.socials
      parsedPhoto.download = photo.links.download_location

      if (photo.height / photo.width > 1.42) {
         parsedPhoto.resize = parsedPhoto.src + '&fit=crop&w=400&h=816'
         parsedPhoto.class = 'vertical'
      } else if (photo.width / photo.height > 1.42) {
         parsedPhoto.resize = parsedPhoto.src + '&fit=crop&w=816&h=400'
         parsedPhoto.class = 'horizontal'
      } else {
         parsedPhoto.resize = parsedPhoto.src + '&fit=crop&w=400&h=400'
         parsedPhoto.class = 'square'
      }
      parsedPhotosArray.push(parsedPhoto)
   })

   return parsedPhotosArray
}

export const getPhotoDisplay = (photo, isLastPhotoInArray) => {
   const div = document.createElement('div')
   div.classList.add('photo-wrapper')
   const img = document.createElement('img')
   img.alt = photo.alt

   if (isLastPhotoInArray) {
      img.src = isLastPhotoInArray
         ? photo.src + '&fit=crop&w=400&h=400'
         : photo.resize
      div.classList.add('square')
   } else {
      img.src = photo.resize
      div.classList.add(photo.class)
   }

   div.addEventListener('click', (event) => {
      createPhotoFullDisplayHTML(event, photo)
   })

   div.appendChild(img)
   return div
}

const createPhotoFullDisplayHTML = (event, photo) => {
   const fullDisplayDiv = document.createElement('div')
   fullDisplayDiv.classList.add('full-display')

   const PhotoDisplay = `
      <div class="full-display--wrapper">
         <img class="full-display--image" src="${photo.src}" alt="${photo.alt}" />
         <div class="full-display--links">
            <a id="download" href="#">Download</a>
            <span id="author" >Photo by <a href="${photo.referalAuthor}" target="_blank">${photo.author}</a> in  <a href="https://unsplash.com/?utm_source=gallery&utm_medium=referral" target="_blank">Unsplash</a> </span>
         </div>
      </div>
   `
   fullDisplayDiv.innerHTML = PhotoDisplay

   document.querySelector('#app').appendChild(fullDisplayDiv)

   // go back to gallery by clicking in the darkened area (outside).
   fullDisplayDiv.addEventListener('click', (event) => {
      const wrapper = document.querySelector('.full-display--wrapper')
      if (fullDisplayDiv !== event.target && wrapper !== event.target) return
      fullDisplayDiv.remove()
   })
}
