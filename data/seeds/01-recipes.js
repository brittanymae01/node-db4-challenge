exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          Name: "Banana Bread",
          Instructions: "Mix wet and dry ingredients, bake for 55 minutes"
        },
        {
          Name: "Spaghetti",
          Instructions: "Boil noodles and strain, mix with sauce of choice"
        },
        {
          Name: "Salad",
          Instructions: "Mix lettuce and toppings, top with dressing of choice"
        }
      ]);
    });
};
