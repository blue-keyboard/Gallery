import { globals } from '../../Globals'
import { queryResultsAndDisplayGallery } from '../Header/Header'
import './Suggestions.css'

export const displaySuggestionsText = () => {
   const suggestionsTextDiv = document.createElement('div')
   suggestionsTextDiv.innerHTML = 'Some ideas to search for...'
   suggestionsTextDiv.classList.add('suggestions-text')
   const header = document.querySelector('header')
   header.insertAdjacentElement('afterend', suggestionsTextDiv)
}

export const getShuffledSuggestions = (suggestions = globals.suggestions) => {
   const shuffled = suggestions.slice() // Create a copy of the array
   for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]] // Swap elements
   }
   return shuffled
}

export const getSuggestionDisplay = (suggestion, isLastPhotoInArray) => {
   const div = document.createElement('div')
   div.classList.add('photo-wrapper')
   const img = document.createElement('img')
   img.alt = `${suggestion.topic} theme image`
   div.classList.add('suggestion')

   if (isLastPhotoInArray) {
      img.src = suggestion.resize.square
      div.classList.add('square')
   } else {
      const resizes = [
         'vertical',
         'square',
         'horizontal',
         'vertical',
         'square',
         'horizontal',
         'vertical',
         'horizontal',
         'horizontal'
      ]
      const randomIndex = Math.floor(Math.random() * resizes.length)
      img.src = suggestion.resize[resizes[randomIndex]]
      div.classList.add(resizes[randomIndex])
   }

   div.addEventListener('click', async () => {
      await queryResultsAndDisplayGallery(suggestion.topic)
   })

   div.appendChild(img)

   const suggestionText = document.createElement('span')
   suggestionText.innerText = `${suggestion.topic}`
   div.appendChild(suggestionText)

   return div
}

export const displaySuggestionsNav = () => {
   const suggestionsArray = getShuffledSuggestions().slice(0, 10)
   const suggestionsNav = document.createElement('nav')
   suggestionsNav.classList.add('suggestions-nav')

   const leftArrow = document.createElement('div')
   leftArrow.classList.add('left-arrow')
   leftArrow.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
  `
   suggestionsNav.appendChild(leftArrow)

   const suggestionsUl = document.createElement('ul')

   suggestionsArray.forEach((suggestion) => {
      const suggestionLi = document.createElement('li')
      suggestionLi.classList.add('nav-suggestion')
      suggestionLi.innerHTML += `
          <img class="nav-suggestion--img" src="${suggestion.resize.square}" />
          <div class="nav-suggestion--topic">${suggestion.topic}</div>
      `
      suggestionLi.addEventListener('click', () => {
         queryResultsAndDisplayGallery(suggestion.topic)
      })
      suggestionsUl.appendChild(suggestionLi)
   })

   suggestionsNav.appendChild(suggestionsUl)

   const rightArrow = document.createElement('div')
   rightArrow.classList.add('right-arrow')
   rightArrow.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
  `
   suggestionsNav.appendChild(rightArrow)

   const header = document.querySelector('header')
   header.insertAdjacentElement('afterend', suggestionsNav)
}
