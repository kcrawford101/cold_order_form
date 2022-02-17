const { Item } = require('../models/');
const User = require('../models/User');

const resolvers = {

    Query: {
        items: async () => {
            const items = await Item.find({});
            return items
        
        },
        users: async (parent, args, context) => {
            const users = await User.find({})
            return users
        }
    }
}



module.exports = resolvers;