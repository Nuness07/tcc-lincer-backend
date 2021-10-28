const { response } = require('express');
const CategoryCursoModel = require('../models/CategoryCursoModel');

class CategoryCursoController {
  // Listar todas as categorias
  async index(req, res) {
    const users = await CategoryCursoModel.findAll();
    res.json(users);
  }

  // Listar uma categoria em especifico
  async show(req, res) {
    const { id } = req.params;
    const user = await CategoryCursoModel.findById(id);

    if (!user) {
      return response.status(404).json({ error: 'Category Curso Not Found' });
    }

    return res.send(user);
  }

  // Criar uma categoria
  async store(req, res) {
    const userBody = req.body;

    const user = await CategoryCursoModel.create(userBody);

    return res.send(user);
  }

  // Atualizar uma categoria
  async update(req, res) {
    res.send('Update');
  }

  // Deletar uma categoria
  async delete(req, res) {
    const { id } = req.params;

    await CategoryCursoModel.delete(id);

    res.sendStatus(204);
  }
}

module.exports = new CategoryCursoController();
