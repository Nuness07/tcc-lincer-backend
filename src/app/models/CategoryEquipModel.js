const { v4: uuidv4 } = require('uuid');
const connection = require('../../database/connection');

class CategoryEquipModel {
  async findAll() {
    const rows = await connection('tipos_equipamentos');
    return rows;
  }

  async findById(id) {
    const [row] = await connection('tipos_equipamentos').where('id_tipo_equipamento', id);
    return row;
  }

  async create(body) {
    const userBody = {
      id_tipo_equipamento: uuidv4(),
      nome: body.nome,
    };
    const row = await connection('tipos_equipamentos').returning('*').insert(userBody);

    return row;
  }

  // async update(id){
  //   const
  // }

  async delete(id) {
    const deleteOp = await connection('tipos_equipamentos')
      .where('id_tipo_equipamento', id).del();

    return deleteOp;
  }
}

module.exports = new CategoryEquipModel();
