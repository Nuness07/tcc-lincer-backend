const { v4: uuidv4 } = require('uuid');
const connection = require('../../database/connection');

class CursoModel {
  async findAll() {
    const rows = await connection('cursos');
    return rows;
  }

  async findById(id) {
    let row = {}
    await connection('cursos').select(['cursos.*', 'modulos.* as modulos']).where('id_curso', id).leftJoin('modulos', 'modulos.id_curso_relation', 'cursos.id_curso').then((data) => {
      const curso = {
        id_curso: data[0].id_curso,
        nome_curso: data[0].nome_curso,
        descricao: data[0].descricao,
        pre_requisitos: data[0].pre_requisitos,
        nivel_curso: data[0].nivel_curso,
        aula_preview: data[0].aula_preview,
        valor: data[0].valor,
        is_publicado: data[0].is_publicado,
        is_aprovado: data[0].is_aprovado,
        id_categoria_curso_relation: data[0].id_categoria_curso_relation,
        id_professor: data[0].id_professor,
        modulos: []
      }

      if(data[0].id_modulo){
        data.forEach(((modulo) => {
          const module = {
            id_modulo: modulo.id_modulo,
            nome: modulo.nome_modulo
          };
          if(curso.modulos.find(el => el.id_modulo == module.id_modulo) == undefined){
            curso.modulos.push(module)
          }
        }));
      }
      row = curso;
    })
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
