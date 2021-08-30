exports.up = function (knex) {
  return knex.schema.createTable('modulos', (table) => {
    table.uuid('id_modulo').primary();
    table.string('nome', 45).notNullable();
    table.string('descricao', 45).notNullable();

    table
      .uuid('id_curso')
      .references('id_curso')
      .inTable('cursos')
      .notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('modulos');
};
