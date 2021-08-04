exports.seed = function (knex) {
  return knex('assinaturas')
    .del()
    .then(() => knex('assinaturas').insert([
      { id_assinatura: 1, nome: 'Premium' },
      { id_assinatura: 2, nome: 'Plus' },
      { id_assinatura: 3, nome: 'Diamond' },
      { id_assinatura: 4, nome: 'Executive' },
    ]));
};
