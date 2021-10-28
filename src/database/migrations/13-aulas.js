exports.up = function (knex) {
  return knex.schema.createTable('aulas', (table) => {
    table.uuid('id_aula').primary();
    table.string('nome_aula', 45).notNullable();
    table.string('descricao_aula', 5000).notNullable();
    table.string('video', 45).notNullable();

    table
      .uuid('id_modulo_relation')
      .references('id_modulo')
      .inTable('modulos')
      .notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('aulas');
};
