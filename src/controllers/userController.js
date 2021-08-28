const UserSchema = require('../models/UserSchema');

module.exports = {
  async create(req, res) {
    try {
      const user = await UserSchema.create(req.body);

      return res.status(201).json({ data: user });
      
    } catch (e) {
      if (e.keyValue) {
        let [field, value] = Object.entries(e.keyValue)[0];
        if (e.code === 11000) {
          return res.status(409).json({
            error: `Duplicate key error on field: \`${field}\`, with value of: \`${value}\``,
          });
        }
      }
      return res.status(400).json({ error: e.message});
    }
  },

  async index(req, res) {
    const users = await UserSchema.find({}, { name: 1, username: 1 });

    return res.json(users)
  },

  async show(req, res) {
    const { id } = req.params;

    try {
      const user = await UserSchema.findById(id);
      if (!user) return res.status(404).json({ error: 'User not found.' });
      user.lastAccess = Date.now();

      return res.status(200).json({ data: user });

    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  },

  async update(req, res) {
    const { id } = req.params;

    try {
        const user = await UserSchema.findByIdAndUpdate(id, req.body, { new: true });
        if (!user) return res.status(404).json({ error: 'User not found.' });

        return res.status(200).json({ data: user });

    } catch (e) {
      if (e.keyValue) {
        let [field, value] = Object.entries(e.keyValue)[0];
        if (e.code === 11000) {
          return res.status(409).json({
            error: `Duplicate key error on field: \`${field}\`, with value of: \`${value}\``,
          });
        }
      }
      return res.status(400).json({ error: e.message});
    }
  },

  async delete(req, res) {
    const { id } = req.params

    try {
      const user = await UserSchema.findByIdAndDelete(id);
      if (!user) return res.status(404).json({ error: 'User not found.' });

      return res.status(200).json({ data: user });

    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  }
}