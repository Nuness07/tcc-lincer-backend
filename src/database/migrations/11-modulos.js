exports.up = function (knex) {
  return knex.schema.createTable('modulos', (table) => {
    table.increments('id_modulo').primary();
    table.string('nome', 45).notNullable();
    table.string('descricao', 45).notNullable();

    table
      .integer('id_curso')
      .references('id_curso')
      .inTable('cursos')
      .notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('modulos');
};
