const { Item } = require('../models/');

const resolvers = {

    Query: {
        items: async () => {
            return await Item.find();
        }
    }
}

module.exports = resolvers;