const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Item {
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



  type Query {
    items: [Item]
    users: [User]
  }

`
module.exports = typeDefs;