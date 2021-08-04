exports.up = function (knex) {
  return knex.schema.createTable('assinaturas', (table) => {
    table.increments('id_assinatura').primary();
    table.string('nome', 45);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('assinaturas');
};
