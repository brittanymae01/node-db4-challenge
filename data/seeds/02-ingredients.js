exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { IngredientName: "flour" },
        { IngredientName: "water" },
        { IngredientName: "bananas" },
        { IngredientName: "noodles" },
        { IngredientName: "sauce" },
        { IngredientName: "lettuce" },
        { IngredientName: "dressing" }
      ]);
    });
};
