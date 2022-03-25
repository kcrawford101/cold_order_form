const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Product {
    _id: ID
    item: String
    upc: Int
    productCode: String
    category: String
    certification: String
    size: String
    caseSize: Int
    unitCost: Float
    discountedUnitCost: Float
    productImageURL: String

    
  }

  type User {
    _id: ID
    name: String
    email: String
    password: String
    role: String
    region: String
    phoneNumber: Int
    empId: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    products: [Product]
    users: [User]
    hello: String!
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!, role: String!, region: String!, phoneNumber: Int!, empId: Int!): User
    addProduct(item: String!, upc: Int!, productCode: String!, category: String!, certification: String!, size: String!, caseSize: Int!, unitCost: Float!, discountedUnitCost: Float!, productImageURL: String! ): Product
    editProduct(category: String!, item: String!, certification: String!, size: String!, productCode: String!, caseSize: Int!, unitCost: Float!, discountedUnitCost: Float!, ): Product
  
    login(email: String!, password:String!): Auth   
  }

`

module.exports = typeDefs;