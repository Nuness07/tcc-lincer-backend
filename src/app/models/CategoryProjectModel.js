const { v4: uuidv4 } = require('uuid');
const connection = require('../../database/connection');

class CategoryProjectModel {
  async findAll() {
    const rows = await connection('categoria_projetos');
    return rows;
  }

  async findById(id) {
    const [row] = await connection('categoria_projetos').where('id_tipo_equipamento', id);
    return row;
  }

  async create(body) {
    const userBody = {
      id_categoria_projeto: uuidv4(),
      nome: body.nome,
    };
    const row = await connection('categoria_projetos').returning('*').insert(userBody);

    return row;
  }

  // async update(id){
  //   const
  // }

  async delete(id) {
    const deleteOp = await connection('categoria_projetos')
      .where('id_tipo_equipamento', id).del();

    return deleteOp;
  }
}

module.exports = new CategoryProjectModel();
