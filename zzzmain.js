for (let i = 0; i < 60; i++) {
   const div = document.createElement('div')

   if (i === 8) {
      div.classList = 'img'
      const img = document.createElement('img')
      img.src =
         'https://images.unsplash.com/photo-1555897209-208b67f652c5?ixid=M3w2MTU4MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTY3MjE3MDV8&ixlib=rb-4.0.3&fit=crop&w=832&h=400'
      div.appendChild(img)
   }

   document.body.appendChild(div)
}
