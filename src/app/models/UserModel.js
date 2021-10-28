const { v4: uuidv4 } = require('uuid');
const connection = require('../../database/connection');

class UserModel {
  async findAll() {
    const rows = await connection('usuarios');
    return rows;
  }

  async findById(id) {
    let row = {}
    await connection('usuarios').select(['usuarios.*', 'projetos.* as projetos', 'roteiros.* as roteiros', 'cursos.* as cursos']).where('id_usuario', id).leftJoin('projetos', 'projetos.id_contratante', 'usuarios.id_usuario').leftJoin('roteiros', 'roteiros.id_usuario_relation', 'usuarios.id_usuario').leftJoin('cursos', 'cursos.id_professor', 'usuarios.id_usuario').then((data) => {
      console.log(data);
      const usuario = {
        id_usuario: data[0].id_usuario,
        email: data[0].email,
        senha: data[0].senha,
        nome: data[0].nome,
        sobrenome: data[0].sobrenome,
        cpf: data[0].cpf,
        cep: data[0].cep,
        uf: data[0].uf,
        city: data[0].city,
        street: data[0].street,
        number: data[0].number,
        complement: data[0].complement,
        foto: data[0].foto,
        descricao: data[0].descricao,
        link_deezer: data[0].link_deezer,
        link_facebook: data[0].link_facebook,
        link_instagram: data[0].link_instagram,
        link_spotify: data[0].link_spotify,
        link_youtube: data[0].link_youtube,
        link_twitch: data[0].link_twitch,
        is_professor: data[0].is_professor,
        is_freelancer: data[0].is_freelancer,
        titulo_profissional: data[0].titulo_profissional,
        descricao_freelancer: data[0].descricao_freelancer,
        experiencia_profissional: data[0].experiencia_profissional,
        principais_habilidades: data[0].principais_habilidades,
        is_professor_aprovado: data[0].is_professor_aprovado,
        is_freelancer_aprovado: data[0].is_freelancer_aprovado,
        pergunta_professor_1: data[0].pergunta_professor_1,
        pergunta_professor_2: data[0].pergunta_professor_2,
        pergunta_professor_3: data[0].pergunta_professor_3,
        freelancer_verificado: data[0].freelancer_verificado,
        projetos: [],
        roteiros: [],
        cursos: [],
      }

      if(data[0].id_projeto){
        data.forEach(((projeto) => {
          const project = {
            id_projeto: projeto.id_projeto,
            nome: projeto.nome_projeto,
            descricao: projeto.descricao,
            habilidades_desejadas: projeto.habilidades_desejadas,
            arquivos: projeto.arquivos,
            preco: projeto.preco,
            aprovado: projeto.aprovado,
            impulso: projeto.impulso,
            id_prestador: projeto.id_prestador,
            id_categoria_projeto: projeto.id_categoria_projeto
          };
          if(usuario.projetos.find(el => el.id_projeto == project.id_projeto) == undefined){
            usuario.projetos.push(project)
          }
        }));
      }
      if(data[0].id_roteiro){
        data.forEach(((roteiro) => {
          const roadMap = {
            id_roteiro: roteiro.id_roteiro,
            nome: roteiro.nome_roteiro,
            texto: roteiro.texto,
          };
          if(usuario.roteiros.find(el => el.id_roteiro == roadMap.id_roteiro) == undefined){
            usuario.roteiros.push(roadMap)
          }
        }));
      }
      if(data[0].id_curso){
        data.forEach(((curso) => {
          const course = {
            id_curso: curso.id_curso,
            nome: curso.nome,
            descricao: curso.descricao,
            pre_requisitos: curso.pre_requisitos,
            nivel_curso: curso.nivel_curso,
            aula_preview: curso.aula_preview,
            valor: curso.valor,
            is_publicado: curso.is_publicado,
            is_aprovado: curso.is_aprovado,
            id_categoria_curso_relation: curso.id_categoria_curso_relation
          };
          if(usuario.cursos.find(el => el.id_curso == course.id_curso) == undefined){
            usuario.cursos.push(course)
          }
        }));
      }
      row = usuario;
    });
    return row;
  }

  async findByEmail(email) {
    const [row] = await connection('usuarios').where('email', email);
    return row;
  }

  async create(body) {
    const row = await connection('usuarios').returning('*').insert({id_usuario: uuidv4(), ...body});
    return row;
  }

  async update(id, body){
    // console.log(...body);
    await connection('usuarios').where('id_usuario', id).update({...body}), [body];
    console.log(body);
  }

  async delete(id) {
    const deleteOp = await connection('usuarios')
      .where('id_usuario', id).del();

    return deleteOp;
  }
}

module.exports = new UserModel();
