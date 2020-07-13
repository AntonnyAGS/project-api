'use strict';

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ message: 'Token não informado =C '});

  const tokenParts = authHeader.split(' ');

  if (tokenParts.length !== 2) return res.status(401).json({ message: 'Token error =C '});

  const [ bearer, token ] = tokenParts;

  if (!/^Bearer$/i.test(bearer)) return res.status(401).json({ message: 'Token mal formatado =C '});

  jwt.verify(token, process.env.SECRET_HASH, (error, decoded) => {
    if (error) return res.status(401).json({ message: 'Token inválido =C' }); 
    req.userId = decoded.id;
    return next();
  })

}
