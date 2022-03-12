const { User, Product } = require('../models/');

const resolvers = {

  Query: {
    products: async () => {
      const products = await Product.find({});
      return products

    },
    users: async (parent, args, context) => {
      const users = await User.find({})
      return users
    }
  },


  Mutation: {
    addUser: async (parent, {email, password, role, name, region, phoneNumber, empId}) => {
      const user = await User.create({email, password, role, name, region, phoneNumber, empId});
      // const token = signToken(user);
      return { user }
    },

    addProduct: async (parent, {item, upc, productCode, category, certification, size, caseSize, unitCost, discountedUnitCost, productImageURL}) => {
      const newProduct = await Product.create({item, upc, productCode, category, certification, size, caseSize, unitCost, discountedUnitCost, productImageURL})
      return { newProduct }

    },

    // login: async (parent, { email, password }) => {
    //   const user = await User.findOne({ email });

    //   if (!user) {
    //     throw new AuthenticationError('No user with this email found!');
    //   }

    //   const correctPw = await user.isCorrectPassword(password);

    //   if (!correctPw) {
    //     throw new AuthenticationError('Incorrect password!');
    //   }

    //   const token = signToken(user);
    //   return { token, user };
    // }
  }
};



module.exports = resolvers;