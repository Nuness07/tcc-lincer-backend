const { response } = require('express');
const CategoryEquipModel = require('../models/CategoryEquipModel');

class CategoryEquipController {
  // Listar todas as categorias
  async index(req, res) {
    console.log('chamou o index');
    const users = await CategoryEquipModel.findAll();
    res.json(users);
  }

  // Listar uma categoria em especifico
  async show(req, res) {
    const { id } = req.params;
    const user = await CategoryEquipModel.findById(id);

    if (!user) {
      return response.status(404).json({ error: 'Category Equipment Not Found' });
    }

    return res.send(user);
  }

  // Criar uma categoria
  async store(req, res) {
    const userBody = req.body;

    const user = await CategoryEquipModel.create(userBody);

    return res.send(user);
  }

  // Atualizar uma categoria
  async update(req, res) {
    res.send('Update');
  }

  // Deletar uma categoria
  async delete(req, res) {
    const { id } = req.params;

    await CategoryEquipModel.delete(id);

    res.sendStatus(204);
  }
}

module.exports = new CategoryEquipController();
