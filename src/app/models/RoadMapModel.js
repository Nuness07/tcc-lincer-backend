const { v4: uuidv4 } = require('uuid');
const connection = require('../../database/connection');

class RoadMapModel {
  async findAll() {
    const rows = await connection('roteiros');
    return rows;
  }

  async findById(id) {
    const [row] = await connection('roteiros').where('id_roteiro', id);
    return row;
  }

  async create(body) {
    const row = await connection('roteiros').returning('*').insert({id_roteiro: uuidv4(), ...body});
    return row;
  }

  async update(id, body){
    await connection('roteiros').where('id_roteiro', id).update({...body}), [body];
    console.log(body);
  }

  async delete(id) {
    const deleteOp = await connection('roteiros')
      .where('id_usuario', id).del();

    return deleteOp;
  }
}

module.exports = new RoadMapModel();
