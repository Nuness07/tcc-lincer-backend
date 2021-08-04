exports.up = function (knex) {
  return knex.schema.createTable('propostas_projetos', (table) => {
    table.increments('id_proposta_projeto').primary();

    table
      .integer('id_proposta')
      .references('id_proposta')
      .inTable('propostas')
      .notNullable();

    table
      .integer('id_projeto')
      .references('id_projeto')
      .inTable('projetos')
      .notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('propostas_projetos');
};
