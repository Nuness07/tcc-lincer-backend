const connection = require('../../database/connection');

class UserModel {
  async findAll() {
    const rows = await connection('usuarios');
    return rows;
  }

  async findById(id) {
    const [row] = await connection('usuarios').where('id_usuario', id);
    return row;
  }

  async findByEmail(email) {
    const [row] = await connection('usuarios').where('email', email);
    return row;
  }

  async create(body) {
    const userBody = {
      id_usuario: 455415,
      email: body.email,
      senha: body.senha,
      nome: body.nome,
      sobrenome: body.sobrenome,
      cpf: body.cpf,
      endereco: body.endereco,
      complemento: body.complemento,
      foto: body.foto,
      descricao: body.descricao,
      link_deezer: body.link_deezer,
      link_facebook: body.link_facebook,
      link_instagram: body.link_instagram,
      link_spotify: body.link_spotify,
      link_youtube: body.link_youtube,
      link_twitch: body.link_twitch,
      is_professor: body.is_professor,
      is_freelancer: body.is_freelancer,
      is_empresa: body.is_empresa,
      titulo_profissional: body.titulo_profissional,
      descricao_freelancer: body.descricao_freelancer,
      experiencia_profissional: body.experiencia_profissional,
      principais_habilidades: body.principais_habilidades,
      is_professor_aprovado: body.is_professor_aprovado,
      is_freelancer_aprovado: body.is_freelancer_aprovado,
      pergunta_professor_1: body.pergunta_professor_1,
      pergunta_professor_2: body.pergunta_professor_2,
      pergunta_professor_3: body.pergunta_professor_3,
      freelancer_verificado: body.freelancer_verificado,
      cnpj: body.cnpj,
      empresa_parceira: body.empresa_parceira,
    };
    const row = await connection('usuarios').returning('*').insert(userBody);

    return row;
  }
}

module.exports = new UserModel();
