import './Photo.css'

// Photo by <a href="https://unsplash.com/@anniespratt?utm_source=gallery&utm_medium=referral">Annie Spratt</a>
// on <a href="https://unsplash.com/?utm_source=gallery&utm_medium=referral">Unsplash</a>

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
   console.log(event.target, photo)

   const fullDisplayDiv = document.createElement('div')
   fullDisplayDiv.classList.add('full-display')

   const PhotoDisplay = `
      <div class="full-display--wrapper">
         <img class="full-display--image" src="${photo.src}" alt="${photo.alt}" />
         <div class="full-display--links">
            <a id="download" href="${photo.download}">Download</a>
            <span id="author" >Photo by <a href="${photo.referalAuthor}">${photo.author}</a> in  <a href="https://unsplash.com/?utm_source=gallery&utm_medium=referral">Unsplash</a> </span>
         </div>
      </div>
   `

   fullDisplayDiv.innerHTML = PhotoDisplay

   document.querySelector('#app').appendChild(fullDisplayDiv)

   fullDisplayDiv.addEventListener('click', (event) => {
      const wrapper = document.querySelector('.full-display--wrapper')

      console.log(
         event.target,
         fullDisplayDiv,
         wrapper,
         event.target === fullDisplayDiv,
         event.target === wrapper
      )

      if (fullDisplayDiv !== event.target && wrapper !== event.target) return

      // const div = document.querySelector('.full-display')
      // div.remove()
      fullDisplayDiv.remove()
   })
}

// {
//    console.log('event listener works!, photo clicked: ', e.target)

//    console.log(img.src, img.src.slice(0, -21), photo)

//    img.src = img.src.slice(0, -21)

//    div.classList.add('full-display')
// }

////////////// PHOTO
// {
//    src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3',
//    author: 'Matt Hardy',
//    referalAuthor:
//       'https://unsplash.com/@matthardy?utm_source=gallery&utm_medium=referral',
//    resize:
//       'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTcxNTg2Mzh8&ixlib=rb-4.0.3&fit=crop&w=816&h=400',
//    class: 'horizontal'
// }
