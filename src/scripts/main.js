import API from './api.js'
import dom from './dom.js'
import events from './events.js'

// Invokes method to retrieve data from API then passes that data to method displaying that data in DOM
API.getAllRecipes().then(arrayOfObjects => {
  dom.recipeDisplay(arrayOfObjects)
})

// Invoking delete event listener
events.deleteListener()