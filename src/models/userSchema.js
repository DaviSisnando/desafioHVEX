const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Attribute "name" required.'],
  },
  username: {
    type: String,
    required: [true, 'Attribute "username" required.'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Attribute "password" required.'],
  },
  lastAccess: {
    type: Date,
    default: Date.now,
  }
})

userSchema.pre('save', async function(next) {
  let { password } = this;
  this.password = await bcrypt.hash(password, 10);
  
  next();
});


userSchema.pre('findOneAndUpdate', async function(next) {
  let { password } = this._update;
  if (password) this._update.password = await bcrypt.hash(password, 10).catch(next);
  
  next();
});

module.exports = mongoose.model('User', userSchema);