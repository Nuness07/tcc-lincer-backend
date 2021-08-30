const { response } = require('express');
const UserModel = require('../models/UserModel');

class UserController {
  // Listar todos os usuários
  async index(req, res) {
    console.log('chamou o index');
    const users = await UserModel.findAll();
    res.json(users);
  }

  // Listar um usuário em especifico
  async show(req, res) {
    const { id } = req.params;
    const user = await UserModel.findById(id);

    if (!user) {
      return response.status(404).json({ error: 'User Not Found' });
    }

    return res.send(user);
  }

  // Criar um usuário
  async store(req, res) {
    const userBody = req.body;

    // verifica se contato ja existe com mesmo e-mail
    console.log(userBody.email);
    const userExists = await UserModel.findByEmail(userBody.email);

    if (userExists) {
      return res.status(400).json({ error: 'Esse e-mail ja está em uso' });
    }
    const user = await UserModel.create(userBody);

    return res.send(user);
  }

  // Atualizar um usuário
  async update(req, res) {
    res.send('Update');
  }

  // Deletar um usuário
  async delete(req, res) {
    const { id } = req.params;

    await UserModel.delete(id);

    res.sendStatus(204);
  }
}

module.exports = new UserController();
