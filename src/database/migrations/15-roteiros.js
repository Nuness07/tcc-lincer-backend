exports.up = function (knex) {
  return knex.schema.createTable('roteiros', (table) => {
    table.uuid('id_roteiro').primary();
    table.string('nome_roteiro', 45).notNullable();
    table.string('texto', 45).notNullable();

    table
      .uuid('id_usuario_relation')
      .references('id_usuario')
      .inTable('usuarios')
      .notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('roteiros');
};
