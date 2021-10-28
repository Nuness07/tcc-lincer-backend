const { response } = require('express');
const AulaModel = require('../models/AulaModel');

class AulaController {
  // Listar todos os usuários
  async index(req, res) {
    const users = await AulaModel.findAll();
    res.json(users);
  }

  // Listar um usuário em especifico
  async show(req, res) {
    const { id } = req.params;
    const user = await AulaModel.findById(id);

    if (!user) {
      return response.status(404).json({ error: 'User Not Found' });
    }

    return res.send(user);
  }

  // Criar um usuário
  async store(req, res) {
    const userBody = req.body;

    // verifica se contato ja existe com mesmo e-mail
    const user = await AulaModel.create(userBody);

    return res.send(user);
  }

  // Atualizar um usuário
  async update(req, res) {
    const { id } = req.params;

    const user = await AulaModel.update(id, req.body);

    return res.send(user);
  }

  // Deletar um usuário
  async delete(req, res) {
    const { id } = req.params;

    await AulaModel.delete(id);

    res.sendStatus(204);
  }
}

module.exports = new AulaController();
