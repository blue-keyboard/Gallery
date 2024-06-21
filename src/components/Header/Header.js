import './Header.css'
import { getRawPhotosFromApi } from '../../Api'
import { createGallery, setMediaQueries } from '../Gallery/Gallery'
import { globals } from '../../Globals'
import { parsePhotos } from '../Photo/Photo'
import {
   displaySuggestionsNav,
   displaySuggestionsText,
   getShuffledSuggestions
} from '../Suggestions/Suggestions'
import { handleErrorAndDisplay } from '../Error/Error'

export const Header = `
   <header>
      <a href="/" class="logo">
         <img src="/assets/gallery-logo.svg" alt="Gallery logo" />
      </a>
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

            // SHOULD BE A FUNCTION THAT GETS EXPORTED TO SUGGESTIONS
            await queryResultsAndDisplayGallery(query)
         }
      })
}

// Function that gets used both by Header search and Suggestions click
export const queryResultsAndDisplayGallery = async (query) => {
   let response = await getRawPhotosFromApi(query)
   const photos = parsePhotos(response)

   console.log(response, photos)

   document.querySelector('.error')?.remove()

   if (photos && photos.length >= 6) {
      globals.currentPhotos = photos
      document.querySelector('.suggestions-text')?.remove()
      globals.matchMedias.removeAllListeners()
      setMediaQueries()
      document.querySelector('.suggestions-nav')?.remove()
      displaySuggestionsNav()
      createGallery()
   } else if (response === 403) {
      console.log('error 403 triggered')
      handleErrorAndDisplay(403)
      globals.matchMedias.removeAllListeners()
      document.querySelector('.suggestions-text')?.remove()
      document.querySelector('.suggestions-nav')?.remove()
      document.querySelector('#gallery')?.remove()
   } else if (photos.length < 6 || response === 404) {
      console.log('error 404 triggered -- ', response.length, photos.length)
      handleErrorAndDisplay(404)
      globals.currentPhotos = getShuffledSuggestions()

      if (!document.querySelector('.suggestions-text')) {
         displaySuggestionsText()
      }

      globals.matchMedias.removeAllListeners()
      setMediaQueries()
      document.querySelector('.suggestions-nav')?.remove()
      createGallery()
   } else {
      console.log('unknown error')

      globals.currentPhotos = getShuffledSuggestions()

      if (!document.querySelector('.suggestions-text')) {
         displaySuggestionsText()
      }
      globals.matchMedias.removeAllListeners()
      setMediaQueries()
      document.querySelector('.suggestions-nav')?.remove()
      createGallery()
   }
}
