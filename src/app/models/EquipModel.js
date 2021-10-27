const { v4: uuidv4 } = require('uuid');
const connection = require('../../database/connection');

class EquipModel {
  async findAll() {
    const rows = await connection('equipamentos');
    return rows;
  }

  async findById(id) {
    const [row] = await connection('equipamentos').where('id_equipamento', id);
    return row;
  }

  async create(body) {
    const userBody = {
      id_equipamento: uuidv4(),
      nome_equipamento: body.nome_equipamento,
      descricao: body.descricao,
      valor_mes: body.valor_mes,
      especificacoes: body.especificacoes,
      fotos: body.fotos,
      marca: body.marca,
      modelo: body.modelo,
      id_empresa_relation: body.id_empresa_relation,
      id_tipo_equipamento: body.id_tipo_equipamento,
    };
    const row = await connection('equipamentos').returning('*').insert(userBody);

    return row;
  }

  // async update(id){
  //   const
  // }

  async delete(id) {
    const deleteOp = await connection('equipamentos')
      .where('id_equipamento', id).del();

    return deleteOp;
  }
}

module.exports = new EquipModel();
