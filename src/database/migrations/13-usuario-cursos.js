exports.up = function (knex) {
  return knex.schema.createTable('usuario_cursos', (table) => {
    table.uuid('id_usuario_cursos').primary();

    table
      .uuid('id_usuario')
      .references('id_usuario')
      .inTable('usuarios')
      .notNullable();

    table
      .uuid('id_curso')
      .references('id_curso')
      .inTable('cursos')
      .notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('usuario_cursos');
};
