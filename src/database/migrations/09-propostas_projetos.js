exports.up = function (knex) {
  return knex.schema.createTable('propostas_projetos', (table) => {
    table.uuid('id_proposta_projeto').primary();

    table
      .uuid('id_proposta')
      .references('id_proposta')
      .inTable('propostas')
      .notNullable();

    table
      .uuid('id_projeto')
      .references('id_projeto')
      .inTable('projetos')
      .notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('propostas_projetos');
};
