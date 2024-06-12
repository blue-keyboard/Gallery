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
import { globals } from './src/Globals.js'

const app = document.querySelector('#app')

app.innerHTML = `
   ${Header}
`
app.appendChild(Gallery)

// ON LOAD
setHeaderEventListeners()
setMediaQueries({ photos: globals.boilerplatePhotos })
createGallery({ photos: globals.boilerplatePhotos })
