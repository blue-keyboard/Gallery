import './style.css'
import { createApi } from 'unsplash-js'

const api = createApi({
   accessKey: 'h27icyLwsEZdsJW_vEdcVstxTwNyRBMVx5V_kSZHBvA'
})

const getPhotosFromApiIntoArray = async (query, count, times) => {
   if (times === 0) return

   const res = await api.photos.getRandom({ query: query, count: count })
   const photos = res.response

   photos.forEach((photo) => {
      const img = {}
      if (photo.height / photo.width > 1.42) {
         img.src = photo.urls.raw + '&fit=crop&w=400&h=830'
         img.class = 'vertical'
      } else if (photo.width / photo.height > 1.42) {
         img.src = photo.urls.raw + '&fit=crop&w=830&h=400'
         img.class = 'horizontal'
      } else {
         img.src = photo.urls.raw + '&fit=crop&w=400&h=400'
         img.class = 'square'
      }
      photosArray.push(img)
   })

   await getPhotosFromApiIntoArray(query, count, times - 1)
}

const setMediaQueries = ($1, $2, $3, $4) => {
   const mobileWindow = window.matchMedia(`(max-width: ${$1 - 1}px)`)
   const columns3 = window.matchMedia(
      `(min-width: ${$1}px) and (max-width: ${$2 - 1}px)`
   )
   const columns4 = window.matchMedia(
      `(min-width: ${$2}px) and (max-width: ${$3 - 1}px)`
   )
   const columns5 = window.matchMedia(
      `(min-width: ${$3}px) and (max-width: ${$4 - 1}px)`
   )
   const columns6 = window.matchMedia(`(min-width: ${$4}px)`)

   mobileWindow.addEventListener('change', (event) => {
      if (event.matches) createGallery(TOTAL_DIVS, 2, photosArray)
   })
   columns3.addEventListener('change', (event) => {
      if (event.matches) createGallery(TOTAL_DIVS, 3, photosArray)
   })
   columns4.addEventListener('change', (event) => {
      if (event.matches) createGallery(TOTAL_DIVS, 4, photosArray)
   })
   columns5.addEventListener('change', (event) => {
      if (event.matches) createGallery(TOTAL_DIVS, 5, photosArray)
   })
   columns6.addEventListener('change', (event) => {
      if (event.matches) createGallery(TOTAL_DIVS, 6, photosArray)
   })
}

const createGridDivs = (total, parent) => {
   parent.innerHTML = ''
   for (let i = 0; i < total; i++) {
      const div = document.createElement('div')
      div.id = i
      parent.appendChild(div)
   }
}

const createArrayToArrangePhotos = (total, col) => {
   divsArray = []
   for (let i = 0; i < total / col; i++) {
      divsArray.push([])
      for (let j = 0; j < col; j++) {
         divsArray[i].push(true)
      }
   }
}

const arrangePhotos = (photos) => {
   let imgs = photos.slice()

   for (let i = 0; i < divsArray.length; i++) {
      for (let j = 0; j < divsArray[i].length; j++) {
         if (divsArray[i][j] === true) {
            const currentDiv = i * divsArray[i].length + j
            const div = document.getElementById(`${currentDiv}`)

            for (const [index, img] of imgs.entries()) {
               const image = document.createElement('img')
               image.src = img.src
               image.classList = img.class

               if (img.class === 'square') {
                  div.appendChild(image)
                  imgs.splice(index, 1)
                  break
               } else if (img.class === 'horizontal') {
                  if (divsArray[i][j + 1] === true) {
                     divsArray[i][j + 1] = false
                     div.appendChild(image)
                     imgs.splice(index, 1)
                     break
                  }
               } else if (img.class === 'vertical') {
                  const lastRow = divsArray[i + 1] ? false : true
                  if (!lastRow) {
                     if (divsArray[i + 1][j] === true) {
                        divsArray[i + 1][j] = false
                        div.appendChild(image)
                        imgs.splice(index, 1)
                        break
                     }
                  }
               }
            }
         }
      }
   }
}

const createGallery = (total, col, photos) => {
   app.classList = ''
   app.classList.add(`columns-${col}`)
   createGridDivs(total, app)
   createArrayToArrangePhotos(total, col)
   arrangePhotos(photos)
}

const app = document.querySelector('#app')

const TOTAL_DIVS = 60
const MEDIA_QUERIES = [720, 950, 1150, 1360]
let divsArray
let photosArray = []
let startCols = MEDIA_QUERIES.reduce(
   (acc, num) => (window.innerWidth > num ? acc + 1 : acc + 0),
   1
)

// ON LOAD
setMediaQueries(...MEDIA_QUERIES)
await getPhotosFromApiIntoArray('animals', 30, 2)
createGallery(TOTAL_DIVS, startCols, photosArray)
