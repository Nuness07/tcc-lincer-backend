const { response } = require('express');
const ProjectModel = require('../models/ProjectModel');

class ProjectController {
  // Listar todos os usuários
  async index(req, res) {
    console.log('chamou o index');
    const users = await ProjectModel.findAll();
    res.json(users);
  }

  // Listar um usuário em especifico
  async show(req, res) {
    const { id } = req.params;
    const user = await ProjectModel.findById(id);

    if (!user) {
      return response.status(404).json({ error: 'User Not Found' });
    }

    return res.send(user);
  }

  // Criar um usuário
  async store(req, res) {
    const userBody = req.body;

    // verifica se contato ja existe com mesmo e-mail
    const user = await ProjectModel.create(userBody);

    return res.send(user);
  }

  // Atualizar um usuário
  async update(req, res) {
    const { id } = req.params;

    const user = await ProjectModel.update(id, req.body);

    return res.send(user);
  }

  // Deletar um usuário
  async delete(req, res) {
    const { id } = req.params;

    await ProjectModel.delete(id);

    res.sendStatus(204);
  }
}

module.exports = new ProjectController();
