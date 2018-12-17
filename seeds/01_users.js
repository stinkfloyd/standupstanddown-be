exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          firstName: "Lola",
          lastName: "Bunny",
          username: "LBunny",
          email: "lbunny@gmail.com",
          photo: "https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawl/images/7/73/Lola_Bunny_-_G.jpg/revision/latest/scale-to-width-down/480?cb=20161201180231",
          bio: "I like to write code and play basketball for the Tune Squad.",
          githubId: "1"
        },
        {
          id: 2,
          firstName: "Michael",
          lastName: "Jordan",
          username: "MJordan",
          email: "MJ@gmail.com",
          photo: "https://cdn.newsapi.com.au/image/v1/486a9b48cdc0fe6a68e5424da04a91cc",
          bio: "I like to write code and help cartoon characters win basketball games against aliens",
          githubId: "2"
        },
      ])
        .then(function () {
          // Moves id column (PK) auto-incrementer to correct value after inserts
          return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))")
        })
    })
};
