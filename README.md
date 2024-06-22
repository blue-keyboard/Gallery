# Gallery

Vanilla javascript application using modules mimicking web components. 

The key features of the application are the layout of the images in a tetris like grid gallery, placing the images dinamically and intertwined, making a unique visual effect, and how at the same time is completely responsive, so the resizes doesn't break the gallery, and always makes for a consistent display.
There are comments on the code on the main functions that takes care of the gallery display, explaining in more detail how its done.

It also takes into account every edge case that could potentially give problems.

The application is live here: https://gallery-bluek.vercel.app/

<br>

## What I've learned

- How to make the most of what can be done with just vanilla Javascript, without any libraries, also understanding the limitations that it has when you want to pass down information between modules and having some sort of State.

- I improved at writing more legible code organizing it better, Though, I rushed a bit towards the end and it could be better.

- Better understanding at how CSS works under the hood, I can quickly identify better what's causing issues and often predict CSS behavior more accurately. Also making custom inputs can be a pain.

- Learned some new things like using event listeners for media queries, how to customize a navbar with overflow using properties like window.scrollLeft, and just in general better understanding on how javascript can manipulate the DOM.


## What can be improved

- The CSS code could be way cleaner, I didn't focus on that part. Also I need to learn about the naming conventions for element classes and that kind of thing.

- When clicking a photo to get the full display, i could implement a blurry load image as a placeholder until the full image loads.

- I could add more suggestions and having a "more results" button when you reach to the end of the gallery, but the limitations of what can be done with the unsplash api doesn't encourage it at the moment.
