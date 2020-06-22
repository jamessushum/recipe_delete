import factory from './factory.js'

const dom = {

  // Method to iterate through passed-in array of objects and run each object through the factory HTML representation converter then displayed in the DOM
  recipeDisplay(arrayOfObjects) {

    // Access HTML element housing the list of recipes in DOM
    const recipeListElement = document.getElementById('recipeList')
    // Clear current content in HTML element
    recipeListElement.textContent = ""

    for (const recipe of arrayOfObjects) {
      const recipeHTML = factory.recipeHtmlRepresentation(recipe)
      recipeListElement.innerHTML += recipeHTML
    }

  }

}

export default dom;