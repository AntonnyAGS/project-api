'use strict';

const User = require(__MODELS + 'User');
const bcrypt = require('bcryptjs');

module.exports = {
  async store(req, res){
    const {name, email, password, birthDate, isCordinator} = req.body;

    const userExists = await User.findOne({ email: email });

    if (userExists) return res.json({ userExists, message: 'Desculpe, este usuário já existe.' });

    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await User.create({
        name,
        email,
        password: hashedPassword,
        birthDate,
        isCordinator
      });

      return res.status(201).json(user);
    }
    catch(error){
      console.log('Error on creating user ======>', error)
      return res.status(404).json({
        error: error,
        message: 'Não foi possível criar o usuário'
      });
    }
  },
  async index(req, res){
    const users = await User.find();
    return res.json(users);
  }
}
