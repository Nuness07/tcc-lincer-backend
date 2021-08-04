exports.up = function (knex) {
  return knex.schema.createTable('aulas', (table) => {
    table.increments('id_aula').primary();
    table.string('nome', 45).notNullable();
    table.string('descricao', 45).notNullable();
    table.string('video', 45).notNullable();
    table.string('anexos', 45);

    table
      .integer('id_modulo')
      .references('id_modulo')
      .inTable('modulos')
      .notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('aulas');
};
