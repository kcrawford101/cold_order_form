const { Item } = require('../models/');
const User = require('../models/User');

const resolvers = {

    Query: {
        products: async () => {
            const products = await Item.find({});
            return products
        
        },
        users: async (parent, args, context) => {
            const users = await User.find({})
            return users
        }
    },


    Mutation: {
        addUser: async (parent, { name, email, password, role, region, phoneNumber, empId  }) => {
            const user = await User.create({ name, email, password, role, region, phoneNumber, empId });
            const token = signToken(user);
            return { token, user }
          },

        addProduct: async (parent, {category, item, certification, size, productCode, caseSize, unitCost, discountedUnitCost }) => {
            const product = await Item.create({category, item, certification, size, productCode, caseSize, unitCost, discountedUnitCost})
            return { product }
        }
    }
}



module.exports = resolvers;