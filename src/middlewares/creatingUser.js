const helpers = require(__HELPERS);

module.exports = {
  validateRegister: (req, res, next) => {
    // Username //
    if (!req.body.name || req.body.name <= 3){
      return res.status(400).send({
        message: 'Por favor, digite um nome com 3 caracteres.'
      });
    }
    // Password //
    if (!req.body.password || req.body.password <= 6){
      return res.status(400).send({
        message: 'Por favor digite uma senha com 6 caracteres.'
      });
    }
    // Repeat Password //
    if (!req.body.password_repeat || req.body.password_repeat !== req.body.password){
      return res.status(400).send({
        message: 'As senhas não combinam.'
      });
    }
    // Email //
    if (!req.body.email || !helpers.validateEmail(req.body.email)){
      return res.status(400).send({
        message: 'O email não é válido.'
      });
    }
    else if(!helpers.validateIfIsAnUsjtEmail(req.body.email)){
      return res.status(400).send({
        message: 'Desculpe. Só usuários São Judas são permitidos. =C'
      });
    }

    next();
  }
}
