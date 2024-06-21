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
            await queryResultsAndDisplayGallery(query)
         }
      })
}

// Function that gets used both by Header search and Suggestions click
// It asks the api for results, parses them and handles an OK response or possible errors
export const queryResultsAndDisplayGallery = async (query) => {
   let response = await getRawPhotosFromApi(query)
   console.log(response)

   const photos = parsePhotos(response)

   document.querySelector('.error')?.remove()
   document.querySelector('.suggestions-text')?.remove()
   document.querySelector('.suggestions-nav')?.remove()

   if (photos && photos.length >= 6) {
      globals.currentPhotos = photos
      globals.matchMedias.removeAllListeners()
      setMediaQueries()
      displaySuggestionsNav(query)
      createGallery()
   } else if (response === 403) {
      handleErrorAndDisplay(403)
      globals.matchMedias.removeAllListeners()
      setMediaQueries()
      document.querySelector('#gallery')?.remove()
   } else if (photos.length < 6 || response === 404) {
      handleErrorAndDisplay(404)
      globals.currentPhotos = getShuffledSuggestions()
      displaySuggestionsText()
      globals.matchMedias.removeAllListeners()
      setMediaQueries()
      createGallery()
   } else {
      globals.currentPhotos = getShuffledSuggestions()
      displaySuggestionsText()
      globals.matchMedias.removeAllListeners()
      setMediaQueries()
      createGallery()
   }
}
