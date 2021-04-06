const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    collectionCount: Int
    collection : [Collection]
  }

  type Item {
    _id: ID
    name: String
    description: String
    condition: String
    priceBought: Int
  }

  type Collection {
    name: String
    user: [User]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    collections(name: String): [Collection]
    item(name: String):[Item]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addItem(name: String!, description: String!,condition: String!, priceBought: String!  ): Collection
    addCollection(name: String!): Collection
  }
`;

module.exports = typeDefs;
