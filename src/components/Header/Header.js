import './Header.css'
import { getRawPhotosFromApi } from '../../Api'
import { createGallery, setMediaQueries } from '../Gallery/Gallery'
import { globals } from '../../Globals'
import { parsePhotos } from '../Photo/Photo'
import {
   displaySuggestionsNav,
   getShuffledSuggestions
} from '../Suggestions/Suggestions'

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
   let rawPhotos = await getRawPhotosFromApi(query)

   console.log(rawPhotos)

   if (rawPhotos && rawPhotos.length > 6) {
      const photos = parsePhotos(rawPhotos)
      globals.currentPhotos = photos
   } else {
      globals.currentPhotos = getShuffledSuggestions()
   }

   const suggestionText = document.querySelector('.suggestions-text')
   suggestionText?.remove()

   globals.matchMedias.removeAllListeners()
   setMediaQueries()

   document.querySelector('.suggestions-nav')?.remove()
   displaySuggestionsNav()
   createGallery()
}
