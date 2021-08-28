const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('error', (err) => {
  console.log('Database connection error: ', err)
})

mongoose.connection.on('disconnected', ()  => {
  console.log('Application disconnected from database!')
})

mongoose.connection.on('connected', () => {
  console.log('Application connected to database!')
});

module.exports = mongoose;
