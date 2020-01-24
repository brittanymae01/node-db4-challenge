const recipes = require("./data/model");

recipes.getInstructions(2).then(res => {
  console.log(res);
  process.exit();
});
