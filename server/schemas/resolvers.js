const { AuthenticationError } = require('apollo-server-express');
const { User, Collection } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        me: async(parent, args, context)=>{
            if(context.user){
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
               return userData;
            }
            throw new AuthenticationError('Not Logged In');
        },
        
        collections: async(parent, { name }) => {
            const params = name ? { name } : {};
            return Collection.find(params).sort({ createdAt: -1 })
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
             const token = signToken(user);
            
             return { token, user };
            },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
          },

          addItem: async (parent, { itemname, description, condition, priceBought}, context) =>{
              if(context.user){
                  const updatedItem = await Collection.findOneAndUpdate(
                      { _id: collectionId },
                      { $push: { items: { itemname, description, condition, priceBought }} },
                      { new: true}
                  );
                  return updatedItem;
              }
              throw new AuthenticationError('You need to logged in')
          },

          addCollection: async (parent, args, context)=>{
              if(context.user){
                  const newCollection = await Collection.create({ ...args, username: context.user.username})

                  await User.findByIdAndUpdate(
                      { _id: context.user._id },
                      { $push: { collection: newCollection._id} },
                      { new: true }
                  );
                  return newCollection;
              }
              throw new AuthenticationError('You need to logged in')
          }
    }
};


module.exports = resolvers;
