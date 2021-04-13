// const db = require('./connection');
// const { Item, User, Collection } = require('../models');

// db.once('open', async () => {
// await Collection.deleteMany();

// const collections = await Collection.insertMany([
//   { name: 'Shooter' },
//   { name: 'RPG' },
//   { name: 'Platformer' },
//   { name: 'Strategy' },
//   { name: 'fighting' }
// ]);

// console.log('collections seeded');

// await Item.deleteMany();

// const items = await Item.insertMany([
//   {
//     name: 'Doom',
//     description:
//       'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
//     collection: collections[0]._id,
//     condition: 'used',
//     priceBought: 14.99
//   },

// ]);

// console.log('items seeded');

// await User.deleteMany();

// await User.create({
//   username: 'Washington',
//   email: 'pamela@testmail.com',
//   password: 'password12345',
// });

// await User.create({
//   username: 'Holt',
//   email: 'eholt@testmail.com',
//   password: 'password12345'
// });

// console.log('users seeded');


// process.exit();
// });
