const { v4: uuidv4 } = require('uuid');
const connection = require('../../database/connection');

class CursoModel {
  async findAll() {
    const rows = await connection('cursos');
    return rows;
  }

  async findById(id) {
    const [row] = await connection('cursos').where('id_curso', id);
    return row;
  }

  async create(body) {
    const userBody = {
      id_curso: uuidv4(),
      nome: body.nome,
      descricao: body.descricao,
      pre_requisitos: body.pre_requisitos,
      nivel_curso: body.nivel_curso,
      aula_preview: body.aula_preview,
      valor: body.valor,
      is_aprovado: false,
      is_publicado: false,
      id_categoria_curso_relation: body.id_categoria_curso_relation,
      id_professor: body.id_professor,
    };
    const row = await connection('cursos').returning('*').insert(userBody);

    return row;
  }

  // async update(id){
  //   const
  // }

  async delete(id) {
    const deleteOp = await connection('cursos')
      .where('id_equipamento', id).del();

    return deleteOp;
  }
}

module.exports = new CursoModel();
