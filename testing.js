const recipes = require("./data/model");

recipes.getShoppingList(2).then(res => {
  console.log(res);
  process.exit();
});
