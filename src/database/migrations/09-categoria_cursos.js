exports.up = function (knex) {
  return knex.schema.createTable('categoria_cursos', (table) => {
    table.increments('id_categoria_curso').primary();
    table.string('nome', 45).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('categoria_cursos');
};
