exports.up = function (knex) {
  return knex.schema.createTable('categoria_projetos', (table) => {
    table.uuid('id_categoria_projeto').primary();
    table.string('nome', 45).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('categoria_projetos');
};
