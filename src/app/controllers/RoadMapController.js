const { response } = require('express');
const RoadMapModel = require('../models/RoadMapModel');

class RoadMapController {
  // Listar todos os usuários
  async index(req, res) {
    const roadMaps = await RoadMapModel.findAll();
    res.json(roadMaps);
  }

  // Listar um usuário em especifico
  async show(req, res) {
    const { id } = req.params;
    const roadMap = await RoadMapModel.findById(id);

    if (!roadMap) {
      return response.status(404).json({ error: 'Roteiro Não encontrado' });
    }

    return res.send(roadMap);
  }

  // Criar um usuário
  async store(req, res) {
    const userBody = req.body;

    // verifica se contato ja existe com mesmo e-mail
    const user = await RoadMapModel.create(userBody);

    return res.send(user);
  }

  // Atualizar um usuário
  async update(req, res) {
    const { id } = req.params;

    const user = await RoadMapModel.update(id, req.body);

    return res.send(user);
  }

  // Deletar um usuário
  async delete(req, res) {
    const { id } = req.params;

    await RoadMapModel.delete(id);

    res.sendStatus(204);
  }
}

module.exports = new RoadMapController();
