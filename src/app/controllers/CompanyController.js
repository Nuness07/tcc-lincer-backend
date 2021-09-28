const { response } = require('express');
const CompanyModel = require('../models/CompanyModel');

class CompanyController {
  // Listar todos os usuários
  async index(req, res) {
    const empresas = []
    const users = await CompanyModel.findAll();
    users.forEach(async (item) => {
      console.log(item);
      const id = item.id_empresa;
      console.log(id);
      await CompanyModel.findById(id).then((data) => {
        empresas.push(data);
        return empresas
      })
    })
    setTimeout(() => res.json(empresas), 500);
  }

  // Listar um usuário em especifico
  async show(req, res) {
    const { id } = req.params;
    const user = await CompanyModel.findById(id);

    if (!user) {
      return response.status(404).json({ error: 'User Not Found' });
    }

    return res.send(user);
  }

  // Criar um usuário
  async store(req, res) {
    const userBody = req.body;

    // verifica se contato ja existe com mesmo e-mail
    console.log('chamou o company ->', userBody.email);
    const userExists = await CompanyModel.findByEmail(userBody.email);

    if (userExists) {
      return res.status(400).json({ error: 'Esse e-mail ja está em uso' });
    }
    const user = await CompanyModel.create(userBody);

    return res.send(user);
  }

  // Atualizar um usuário
  async update(req, res) {
    res.send('Update');
  }

  // Deletar um usuário
  async delete(req, res) {
    const { id } = req.params;

    await CompanyModel.delete(id);

    res.sendStatus(204);
  }
}

module.exports = new CompanyController();
