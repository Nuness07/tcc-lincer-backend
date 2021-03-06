const { response } = require('express');
const EquipModel = require('../models/EquipModel');

class EquipController {
  // Listar todos os usuários
  async index(req, res) {
    console.log('chamou o index');
    const users = await EquipModel.findAll();
    res.json(users);
  }

  // Listar um usuário em especifico
  async show(req, res) {
    const { id } = req.params;
    const user = await EquipModel.findById(id);

    if (!user) {
      return response.status(404).json({ error: 'User Not Found' });
    }

    return res.send(user);
  }

  // Criar um usuário
  async store(req, res) {
    const userBody = req.body;

    const user = await EquipModel.create(userBody);

    return res.send(user);
  }

  // Atualizar um usuário
  async update(req, res) {
    res.send('Update');
  }

  // Deletar um usuário
  async delete(req, res) {
    const { id } = req.params;

    await EquipModel.delete(id);

    res.sendStatus(204);
  }
}

module.exports = new EquipController();
