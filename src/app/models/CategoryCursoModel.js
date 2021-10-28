const { v4: uuidv4 } = require('uuid');
const connection = require('../../database/connection');

class CategoryCursoModel {
  async findAll() {
    const rows = await connection('categoria_cursos');
    return rows;
  }

  async findById(id) {
    const [row] = await connection('categoria_cursos').where('id_tipo_equipamento', id);
    return row;
  }

  async create(body) {
    const userBody = {
      id_tipo_equipamento: uuidv4(),
      nome: body.nome,
    };
    const row = await connection('categoria_cursos').returning('*').insert(userBody);

    return row;
  }

  // async update(id){
  //   const
  // }

  async delete(id) {
    const deleteOp = await connection('categoria_cursos')
      .where('id_tipo_equipamento', id).del();

    return deleteOp;
  }
}

module.exports = new CategoryCursoModel();
