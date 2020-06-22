import API from './api.js'
import dom from './dom.js'

// Object houses method to delete journal entry when delete button is clicked
const events = {

  deleteListener() {
    // Access the HTML element housing the list of recipes in DOM
    const recipeListElement = document.getElementById('recipeList')
    // Add event listener to listen for clicks anywhere in the recipe
    recipeListElement.addEventListener('click', event => {
      // Conditional to check if the delete button was clicked
      if (event.target.id.startsWith('deleteRecipe')) {
        // If delete button clicked, split the id and grab the 1st position in array which houses the number 1
        const recipeToDeleteId = event.target.id.split('--')[1]
        // Pass-through delete item id to deleteRecipe method in api
        API.deleteRecipe(recipeToDeleteId).then(() => {
          // Invoke getAllRecipes method to retrieve new array of objects
          API.getAllRecipes().then(newArrayOfObjects => {
            // Pass-through new array of objects to recipeDisplay method to convert to HTML and display in DOM
            dom.recipeDisplay(newArrayOfObjects)

          })

        })

      }

    })

  }

}

export default events;