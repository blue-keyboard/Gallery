import './style.css'
import {
   Gallery,
   createGallery,
   setMediaQueries
} from './src/components/Gallery/Gallery.js'
import {
   Header,
   setHeaderEventListeners
} from './src/components/Header/Header.js'
import {
   displaySuggestionsText,
   getShuffledSuggestions
} from './src/components/Suggestions/Suggestions.js'
import { globals } from './src/Globals.js'

export const app = document.querySelector('#app')

app.innerHTML = `
   ${Header}
`
app.appendChild(Gallery)

// ON LOAD
setHeaderEventListeners()
globals.currentPhotos = getShuffledSuggestions()
setMediaQueries()
displaySuggestionsText()
createGallery()
