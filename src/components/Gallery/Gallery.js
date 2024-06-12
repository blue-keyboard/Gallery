import { globals } from '../../Globals'
import { getPhotoDisplay } from '../Photo/Photo'
import './Gallery.css'

export const Gallery = document.createElement('div')
Gallery.id = 'gallery'

// Creates a square grid div in the html and the
// same square here as a [row][column] Array filled with -true- values
// to perform the logic to place the photos.
// it always makes a square rounding down the size given
const createArrayToArrangePhotos = (size, col) => {
   Gallery.innerHTML = ''
   globals.divsArray = []

   for (let i = 0; i < Math.floor(size / col); i++) {
      globals.divsArray.push([])
      for (let j = 0; j < col; j++) {
         globals.divsArray[i].push(true)
         Gallery.innerHTML += `<div id="${i * col + j}"></div>`
      }
   }
   console.log('Total div elements (size): ' + globals.divsArray.length * col)
}

// Places the photos in the gallery like tetris pieces, starting from the top
// more of the logic explained inside
const arrangePhotos = (photos) => {
   let imgs = photos.slice()
   const divsArray = globals.divsArray

   // DELETE AFTER
   let squaredToFit = 0
   console.log('Total photos in array: ' + photos.length)

   // mutable variable to control the direction
   // in which we are traversing the array
   // this is done so that vertical images aren't usually placed at the right edges
   // it is specially relevant when there is a lot of horizontal images in the pool
   let leftToRight = true

   // traverse 2 dimension array and check img availability
   for (let i = 0; i < divsArray.length; i++) {
      const columns = divsArray[i].length
      let j

      for (
         // check direction
         j = leftToRight ? 0 : (j = columns - 1);
         leftToRight ? j < columns : j >= 0;
         leftToRight ? j++ : j--
      ) {
         const currentDiv = i * columns + j

         if (divsArray[i][j] === true) {
            let div = document.getElementById(`${currentDiv}`)

            // In tetris there are 2 options, moving the piece or changing the piece
            // instead of moving it we change the piece till it fits, then we note the cells it ocupies
            // so there is no overlay, then we remove the img from the photos array so it doesnt repeat.
            for (const [index, img] of imgs.entries()) {
               // DELETE AFTER
               if (index === imgs.length - 1) squaredToFit++

               let image = getPhotoDisplay(img, index === imgs.length - 1)

               // place square img
               if (image.classList.contains('square')) {
                  div.appendChild(image)
                  imgs.splice(index, 1)
                  break

                  // place horizontal img
               } else if (img.class === 'horizontal') {
                  // depending on the direction we put the image in one div or the
                  let minusOneOrPlusOne = leftToRight ? 1 : -1
                  if (divsArray[i][j + minusOneOrPlusOne] === true) {
                     divsArray[i][j + minusOneOrPlusOne] = false
                     div = leftToRight
                        ? div
                        : document.getElementById(`${currentDiv - 1}`)

                     div.appendChild(image)
                     imgs.splice(index, 1)
                     break
                  }

                  // place vertical img
               } else if (img.class === 'vertical') {
                  // check if we are in the last row becouse trying to access
                  // elements of 'undefined' crashes the program
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
      // each 2 iterations it changes the direction that it is traversing
      // if it were each iteration it wouldn't solve the problem of
      // the vertical images being placed mostly at the right
      ;(i + 1) % 2 === 0 ? (leftToRight = !leftToRight) : leftToRight
   }

   // DELETE AFTER
   console.log('Images displayed: ' + (photos.length - imgs.length))
   console.log('Photos left in array: ' + imgs.length)
   console.log('Images Squared to fit: ' + squaredToFit)
   console.log('-----------------------------')
}

// Function that encompases all the steps
export const createGallery = ({
   photos = globals.currentPhotos,
   cols = globals.currentCols
} = {}) => {
   console.log(globals)

   let size = Math.floor(photos.length * 1.3)
   Gallery.classList = ''
   Gallery.classList.add(`columns-${cols}`)
   createArrayToArrangePhotos(size, cols)
   arrangePhotos(photos)
}

// If we want the Gallery to be responsive it would decrease or increase
// the columns of the gallery, we set an event listener here to change
// the grid display and re-arrange the photos again to fit the new grid
export const setMediaQueries = ({
   $1 = globals.MEDIA_QUERIES[0],
   $2 = globals.MEDIA_QUERIES[1],
   $3 = globals.MEDIA_QUERIES[2],
   $4 = globals.MEDIA_QUERIES[3],
   photos = globals.currentPhotos
} = {}) => {
   globals.matchMedias.mobileWindow = window.matchMedia(
      `(max-width: ${$1 - 1}px)`
   )
   globals.matchMedias.columns3 = window.matchMedia(
      `(min-width: ${$1}px) and (max-width: ${$2 - 1}px)`
   )
   globals.matchMedias.columns4 = window.matchMedia(
      `(min-width: ${$2}px) and (max-width: ${$3 - 1}px)`
   )
   globals.matchMedias.columns5 = window.matchMedia(
      `(min-width: ${$3}px) and (max-width: ${$4 - 1}px)`
   )
   globals.matchMedias.columns6 = window.matchMedia(`(min-width: ${$4}px)`)

   const createGalleryWithGivenColumns = (cols) => {
      return (event) => {
         if (event.matches) {
            globals.currentCols = cols
            return createGallery({ photos: photos, cols: cols })
         }
      }
   }

   globals.matchMedias.handlerMobile = createGalleryWithGivenColumns(2)
   globals.matchMedias.handlerColumns3 = createGalleryWithGivenColumns(3)
   globals.matchMedias.handlerColumns4 = createGalleryWithGivenColumns(4)
   globals.matchMedias.handlerColumns5 = createGalleryWithGivenColumns(5)
   globals.matchMedias.handlerColumns6 = createGalleryWithGivenColumns(6)

   globals.matchMedias.mobileWindow.addEventListener(
      'change',
      globals.matchMedias.handlerMobile
   )
   globals.matchMedias.columns3.addEventListener(
      'change',
      globals.matchMedias.handlerColumns3
   )
   globals.matchMedias.columns4.addEventListener(
      'change',
      globals.matchMedias.handlerColumns4
   )
   globals.matchMedias.columns5.addEventListener(
      'change',
      globals.matchMedias.handlerColumns5
   )
   globals.matchMedias.columns6.addEventListener(
      'change',
      globals.matchMedias.handlerColumns6
   )
}
