const { v4: uuidv4 } = require('uuid');
const connection = require('../../database/connection');

class ProjectModel {
  async findAll() {
    const rows = await connection('projetos');
    return rows;
  }

  async findById(id) {
    const [row] = await connection('projetos').where('id_projeto', id);
    return row;
  }

  async create(body) {
    const row = await connection('projetos').returning('*').insert({id_projeto: uuidv4(), ...body});
    return row;
  }

  async update(id, body){
    await connection('projetos').where('id_projeto', id).update({...body}), [body];
    console.log(body);
  }

  async delete(id) {
    const deleteOp = await connection('projetos')
      .where('id_projeto', id).del();

    return deleteOp;
  }
}

module.exports = new ProjectModel();
