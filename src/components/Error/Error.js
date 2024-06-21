import './Error.css'

export const handleErrorAndDisplay = (error) => {
   const errorDiv = document.createElement('div')
   errorDiv.classList.add('error')

   if (error === 404) {
      console.log(error)

      errorDiv.innerHTML = `
            <div class="error--sad-face">:(</div>
            <div class="error-message">
                <div class="error--message-title">Error 404</div>
                <div class="error--message-description">Sorry, no results were found...</div>
            </div>
        `
   } else if (error === 403) {
      errorDiv.innerHTML = `
            <div class="error--sad-face">:(</div>
            <div class="error-message">
                <div class="error--message-title">Error 403</div>
                <div class="error--message-description">Sorry, the server can't accept more resquests <br> Come back later!</div>
            </div>
        `
   }

   const header = document.querySelector('header')
   header.insertAdjacentElement('afterend', errorDiv)
}
