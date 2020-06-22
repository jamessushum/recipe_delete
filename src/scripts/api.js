// API object houses getAllRecipes and deleteRecipe methods
const API = {
  // Method retrieves data from API 
  async getAllRecipes() {

    const response = await fetch('http://localhost:8088/recipes')
    const data = await response.json()
    return data

  },
  // Method deletes data from API
  async deleteRecipe(recipeId) {

    const response = await fetch(`http://localhost:8088/recipes/${recipeId}`, {
      method: "DELETE"
    })
    
    return response.json()
    
  }

}

export default API;