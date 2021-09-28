const { v4: uuidv4 } = require('uuid');

exports.seed = function (knex) {
  return knex('empresas')
    .del()
    .then(() => knex('empresas').insert([
      {
        id_empresa: uuidv4(),
        email: "empresateste1@gmail.com",
        senha: "senhateste",
        nome: "Empresa teste 1",
        cnpj: "1234567/123",
        cep: "03535321",
        uf: "SP",
        city: "São Paulo",
        street: "Av Doutor Bernardino Brito Fonseca de Carvalho",
        number: "1647",
        complement: "gamelinha",
        telefone: "38077058",
      },
      {
        id_empresa: uuidv4(),
        email: "empresateste2@gmail.com",
        senha: "senhateste",
        nome: "Empresa teste 2",
        cnpj: "1234567/123",
        cep: "03535321",
        uf: "MT",
        city: "Mato Grosso",
        street: "Rua 19",
        number: "4",
        complement: "cpa v",
        telefone: "38077058",
      },
    ]));
};
