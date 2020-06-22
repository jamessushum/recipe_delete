// Object houses method to convert data to HTML representation 
const factory = {

  // Method takes in object and converts data to HTML representation
  recipeHtmlRepresentation(recipe) {
  
    const htmlRepresentation = `
      <section class="recipe--${recipe.id}">
        <header class="recipe__title">
          ${recipe.title}
        </header>
        <div class="recipe__instructions">
          ${recipe.instructions}
        </div>
        <button id="deleteRecipe--${recipe.id}">
          Delete Recipe
        </button>
      </section>
    `
  
    return htmlRepresentation
  
  }

}


export default factory;