import { globals } from '../../Globals'
import { queryResultsAndDisplayGallery } from '../Header/Header'
import './Suggestions.css'

export const displaySuggestionsText = () => {
   const suggestionsTextDiv = document.createElement('div')
   suggestionsTextDiv.innerHTML = 'Some ideas to search for...'
   suggestionsTextDiv.classList.add('suggestions-text')

   if (document.querySelector('.error')) {
      document
         .querySelector('.error')
         .insertAdjacentElement('afterend', suggestionsTextDiv)
   } else {
      document
         .querySelector('header')
         .insertAdjacentElement('afterend', suggestionsTextDiv)
   }
}

export const getShuffledSuggestions = (suggestions = globals.suggestions) => {
   const shuffled = suggestions.slice()
   for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
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
      window.scrollTo(0, 0)
   })

   div.appendChild(img)

   const suggestionText = document.createElement('span')
   suggestionText.innerText = `${suggestion.topic}`
   div.appendChild(suggestionText)

   return div
}

export const displaySuggestionsNav = (query) => {
   const suggestionsArray = getShuffledSuggestions()
      .slice(0, 13)
      .filter((suggestion) => suggestion.topic !== query)
   const suggestionsNav = document.createElement('nav')
   suggestionsNav.classList.add('suggestions-nav')
   const suggestionsUl = document.createElement('ul')

   // Left Arrow display and Functionality
   const leftArrow = document.createElement('div')
   leftArrow.classList.add('left-arrow')
   const leftArrowWrapper = document.createElement('div')
   leftArrowWrapper.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
  `
   leftArrow.appendChild(leftArrowWrapper)
   suggestionsNav.appendChild(leftArrow)

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
   rightArrow.classList.add('active')
   const rightArrowWrapper = document.createElement('div')
   rightArrowWrapper.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
  `
   rightArrow.appendChild(rightArrowWrapper)
   suggestionsNav.appendChild(rightArrow)

   const header = document.querySelector('header')
   header.insertAdjacentElement('afterend', suggestionsNav)

   // Scrolling and arrows functionality
   let scrolledLeft = 0

   const manageArrowIcons = () => {
      if (scrolledLeft > 20) {
         leftArrow.classList.add('active')
      } else {
         leftArrow.classList.remove('active')
      }

      let maxScrollValue =
         suggestionsUl.scrollWidth - suggestionsUl.clientWidth - 20

      if (scrolledLeft >= maxScrollValue) {
         rightArrow.classList.remove('active')
      } else {
         rightArrow.classList.add('active')
      }
   }

   rightArrowWrapper.addEventListener('click', async () => {
      suggestionsUl.scrollLeft += 300
      scrolledLeft += 300
      manageArrowIcons()
   })

   leftArrowWrapper.addEventListener('click', async () => {
      suggestionsUl.scrollLeft -= 300
      scrolledLeft -= 300
      manageArrowIcons()
   })

   suggestionsUl.addEventListener('scroll', () => {
      scrolledLeft = suggestionsUl.scrollLeft
      manageArrowIcons()
   })
}
