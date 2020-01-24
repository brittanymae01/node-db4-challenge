exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipe_ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_ingredients").insert([
        { recipe_id: 1, ingredient_id: 1, Quantity: 2.5 },
        { recipe_id: 1, ingredient_id: 2, Quantity: 1 },
        { recipe_id: 1, ingredient_id: 3, Quantity: 2 },
        { recipe_id: 2, ingredient_id: 4, Quantity: 10 },
        { recipe_id: 2, ingredient_id: 5, Quantity: 1.5 },
        { recipe_id: 3, ingredient_id: 6, Quantity: 2.0 },
        { recipe_id: 3, ingredient_id: 7, Quantity: 2.0 }
      ]);
    });
};
