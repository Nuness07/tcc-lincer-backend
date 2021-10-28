const { v4: uuidv4 } = require('uuid');
const connection = require('../../database/connection');

class ModuloModel {
  async findAll() {
    const rows = await connection('modulos');
    return rows;
  }

  async findById(id) {
    let row = {}
    await connection('modulos').select(['modulos.*', 'aulas.* as aulas']).where('id_modulo', id).leftJoin('aulas', 'aulas.id_modulo_relation', 'modulos.id_modulo').then((data) => {
      const modulo = {
        id_modulo: data[0].id_modulo,
        nome_modulo: data[0].nome_modulo,
        id_curso_relation: data[0].id_curso_relation,
        aulas: []
      }

      if(data[0].id_aula){
        data.forEach(((aula) => {
          const classes = {
            id_aula: aula.id_aula,
            nome_aula: aula.nome_aula,
            descricao_aula: aula.descricao_aula,
            video: aula.video,
          };
          if(modulo.aulas.find(el => el.id_modulo == classes.id_aula) == undefined){
            modulo.aulas.push(classes)
          }
        }));
      }
      row = modulo;
    })
    return row;
  }

  async create(body) {
    const userBody = {
      id_modulo: uuidv4(),
      nome_modulo: body.nome_modulo,
      id_curso_relation: body.id_curso_relation
    };
    const row = await connection('modulos').returning('*').insert(userBody);

    return row;
  }

  // async update(id){
  //   const
  // }

  async delete(id) {
    const deleteOp = await connection('modulos')
      .where('id_equipamento', id).del();

    return deleteOp;
  }
}

module.exports = new ModuloModel();
