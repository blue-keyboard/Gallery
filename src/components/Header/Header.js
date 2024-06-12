import './Header.css'
import { getRawPhotosFromApi } from '../../Api'
import { createGallery, setMediaQueries } from '../Gallery/Gallery'
import { globals } from '../../Globals'
import { parsePhotos } from '../Photo/Photo'

export const Header = `
  <header>
  <div class="logo">
    <img src="/assets/gallery-logo.svg" alt="Gallery logo" />
  </div>
  <div class="search-bar-wrapper">
    <img
        class="search-icon"
        src="/assets/search-icon.svg"
        alt="Search icon"
    />
    
        <input type="search" name="query" autocomplete="off" placeholder="Search..." />
    
  </div>
  </header>
`

export const setHeaderEventListeners = () => {
   document
      .querySelector('.search-bar-wrapper')
      .addEventListener('click', (e) => {
         if (globals.currentCols === 2) {
            document.querySelector('.logo').classList.add('fade-out')
            document.querySelector('input[type="search"]').focus()
         }
      })
   document
      .querySelector('.search-bar-wrapper')
      .addEventListener('focusout', (e) => {
         if (globals.currentCols === 2) {
            document.querySelector('.logo').classList.remove('fade-out')
         }
      })

   document
      .querySelector('input[type="search"]')
      .addEventListener('search', async (e) => {
         const query = e.target.value
         if (query !== '') {
            e.target.blur()
            let rawPhotos = await getRawPhotosFromApi(query)
            console.log(rawPhotos)

            if (rawPhotos) {
               const photos = parsePhotos(rawPhotos)
               console.log(photos)

               globals.currentPhotos = photos
            } else {
               globals.currentPhotos = globals.boilerplatePhotos
            }
            globals.matchMedias.removeAllListeners()
            setMediaQueries()
            createGallery()
         }
      })
}
