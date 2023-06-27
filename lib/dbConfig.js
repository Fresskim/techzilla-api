const mongoose = require('mongoose');

module.exports = {
  connect: () => {
    mongoose.connect(process.env.DB_CONNECTION)
    .then(() => console.log('Connected to DB!'));
  }
}