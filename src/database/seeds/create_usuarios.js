exports.seed = function (knex) {
  return knex('usuarios')
    .del()
    .then(() => knex('usuarios').insert([
      {
        // usuário comum
        id_usuario: 1,
        email: 'comum@exemplo.com',
        nome: 'Usuario',
        sobrenome: 'Comum',
        senha: 'senha123',
        cpf: '123.456.789-01',
        endereco: 'Rua Lorem Ipsum',
        complemento: 'Lorem Ipsum',
        foto: 'Lorem Ipsum',
        is_professor: false,
        is_freelancer: false,
        is_empresa: false,
      },
      {
        // usuário freelancer
        id_usuario: 2,
        email: 'freelancer@exemplo.com',
        nome: 'Usuario',
        sobrenome: 'Freelancer',
        senha: 'senha123',
        cpf: '123.456.789-01',
        endereco: 'Rua Lorem Ipsum',
        complemento: 'Lorem Ipsum',
        foto: 'Lorem Ipsum',
        is_professor: false,
        is_freelancer: true,
        is_empresa: false,
      },
      {
        // usuario professor
        id_usuario: 3,
        email: 'professor@exemplo.com',
        nome: 'Usuario',
        sobrenome: 'Professor',
        senha: 'senha123',
        cpf: '123.456.789-01',
        endereco: 'Rua Lorem Ipsum',
        complemento: 'Lorem Ipsum',
        foto: 'Lorem Ipsum',
        is_professor: true,
        is_freelancer: false,
        is_empresa: false,
      },
      {
        // usuário empresa
        id_usuario: 4,
        email: 'empresa@exemplo.com',
        nome: 'Usuario',
        sobrenome: 'Empresa',
        senha: 'senha123',
        cnpj: '123.456.789/01234-5',
        endereco: 'Rua Lorem Ipsum',
        complemento: 'Lorem Ipsum',
        foto: 'Lorem Ipsum',
        is_professor: false,
        is_freelancer: false,
        is_empresa: true,
      },
    ]));
};
