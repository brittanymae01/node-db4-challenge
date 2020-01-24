db = require("./dbConfig");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db("recipe_ingredients")
    .join("ingredients", "recipe_ingredients.ingredient_id", "ingredients.id")
    .select("ingredients.IngredientName", "recipe_ingredients.Quantity")
    .where("recipe_ingredients.recipe_id", recipe_id);
}

function getInstructions(recipe_id) {}
