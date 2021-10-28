const { response } = require('express');
const CursoModel = require('../models/CursoModel');

class CursoController {
  // Listar todos os usuários
  async index(req, res) {
    const users = await CursoModel.findAll();
    res.json(users);
  }

  // Listar um usuário em especifico
  async show(req, res) {
    const { id } = req.params;
    const user = await CursoModel.findById(id);

    if (!user) {
      return response.status(404).json({ error: 'Curso Not Found' });
    }

    return res.send(user);
  }

  // Criar um usuário
  async store(req, res) {
    const userBody = req.body;

    const user = await CursoModel.create(userBody);

    return res.send(user);
  }

  // Atualizar um usuário
  async update(req, res) {
    res.send('Update');
  }

  // Deletar um usuário
  async delete(req, res) {
    const { id } = req.params;

    await CursoModel.delete(id);

    res.sendStatus(204);
  }
}

module.exports = new CursoController();
