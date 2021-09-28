const { response } = require('express');
const CategoryProjectModel = require('../models/CategoryProjectModel');

class CategoryProjectController {
  // Listar todas as categorias
  async index(req, res) {
    console.log('chamou o index');
    const users = await CategoryProjectModel.findAll();
    res.json(users);
  }

  // Listar uma categoria em especifico
  async show(req, res) {
    const { id } = req.params;
    const user = await CategoryProjectModel.findById(id);

    if (!user) {
      return response.status(404).json({ error: 'Essa Categoria de projeto não foi encontrada' });
    }

    return res.send(user);
  }

  // Criar uma categoria
  async store(req, res) {
    const userBody = req.body;

    const user = await CategoryProjectModel.create(userBody);

    return res.send(user);
  }

  // Atualizar uma categoria
  async update(req, res) {
    res.send('Update');
  }

  // Deletar uma categoria
  async delete(req, res) {
    const { id } = req.params;

    await CategoryProjectModel.delete(id);

    res.sendStatus(204);
  }
}

module.exports = new CategoryProjectController();
