exports.up = function (knex) {
  return knex.schema.createTable('propostas', (table) => {
    table.uuid('id_proposta').primary();
    table.float('valor').notNullable();
    table.string('descricao', 45).notNullable();
    table.string('prazo', 45).notNullable();
    table.boolean('disponibilidade').notNullable();

    table
      .uuid('id_usuario')
      .references('id_usuario')
      .inTable('usuarios')
      .notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('propostas');
};
