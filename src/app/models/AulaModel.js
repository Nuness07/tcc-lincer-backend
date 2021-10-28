const { v4: uuidv4 } = require('uuid');
const connection = require('../../database/connection');

class AulaModel {
  async findAll() {
    const rows = await connection('aulas');
    return rows;
  }

  async findById(id) {
    const [row] = await connection('aulas').where('id_aula', id);
    return row;
  }

  async create(body) {
    const userBody = {
      id_aula: uuidv4(),
      nome_aula: body.nome_aula,
      descricao_aula: body.descricao_aula,
      video: body.video,
      id_modulo_relation: body.id_modulo_relation
    };
    const row = await connection('aulas').returning('*').insert(userBody);

    return row;
  }

  // async update(id){
  //   const
  // }

  async delete(id) {
    const deleteOp = await connection('aulas')
      .where('id_equipamento', id).del();

    return deleteOp;
  }
}

module.exports = new AulaModel();
