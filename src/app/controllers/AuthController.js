const jwt = require('jsonwebtoken');
const UserModel = require('../models/UserModel');

class AuthController {
  async index(req, res) {
    const { email, password } = req.body;
    const user = await UserModel.findByEmail(email);

    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado' });
    }

    if (user.senha !== password) {
      return res.status(400).json({ error: 'Usuário não autenticado' });
    }

    const token = jwt.sign({ _id: user.id_usuario }, 'secret');

    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.send({
      message: 'Logado com sucesso',
    });
  }
}

module.exports = new AuthController();
