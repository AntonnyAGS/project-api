'use strict';

const User = require(__MODELS + 'User');
const bcrypt = require('bcryptjs');
const { generateToken } = require(__HELPERS);

module.exports = {
  async store(req, res){
    try {
      const {name, email, password, birthDate, isCordinator} = req.body;
      const userExists = await User.findOne({ email: email });
      if (userExists) return res.status(400).json({ userExists, message: 'Desculpe, este usuário já existe.' });
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await User.create({
        name,
        email,
        password: hashedPassword,
        birthDate,
        isCordinator
      });

      // Remove password on return //
      user.password = undefined;
      
      return res.status(201).json({ user, token: generateToken({ id: user.id }) });
    }
    catch(error){
      console.log('Error on creating user ======>', error)
      return res.status(404).json({
        error: error,
        message: 'Não foi possível criar o usuário'
      });
    }
  },
  async authenticate(req, res){
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password'); 

    if (!user) return res.status(400).json({ message: 'Usuário não encontrado =C' });

    try {
      const compareResult = await bcrypt.compare(password, user.password);
      if (!compareResult) return res.status(400).json({ message: 'Estes dados não conferem' });
      else {
        user.password = undefined;
        return res.json({ user, token: generateToken({ id: user.id }) });
      }
    }
    catch (error){
      console.log('Error on authenticate user ======>', error);
      return res.status(404).json({
        error: error,
        message: 'Não foi possível logar com o usuário'
      })
    }
  },
  async index(req, res){
    const users = await User.find();
    return res.json(users);
  }
}
