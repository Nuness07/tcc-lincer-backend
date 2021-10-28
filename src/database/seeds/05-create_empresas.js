exports.seed = function (knex) {
  return knex('empresas')
    .del()
    .then(() => knex('empresas').insert([
      {
        id_empresa:'874ec40e-5e2f-4745-ac01-09e419daf02d',
        email: "empresacompleta@gmail.com",
        senha: "senhateste",
        nome: "Empresa Completa Audiovisual",
        cnpj: "12345678/1000",
        cep: "03535-000",
        uf: "SP",
        city: "São Paulo",
        street: "Av doutor bernardino brito fonseca de carvalho",
        number: "1647",
        complement: "apt 132 torre 1",
        telefone: '1199999-9999',
      },
    ]));
};
