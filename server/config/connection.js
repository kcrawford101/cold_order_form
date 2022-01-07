const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/coldOrderFormDB'
);

module.exports = mongoose.connection;