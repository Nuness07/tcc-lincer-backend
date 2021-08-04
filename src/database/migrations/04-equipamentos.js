exports.up = function (knex) {
  return knex.schema.createTable('equipamentos', (table) => {
    table.increments('id_equipamento').primary();
    table.string('nome', 45).notNullable();
    table.string('descricao', 45).notNullable();
    table.string('valor_mes', 45).notNullable();
    table.string('especificacoes', 45).notNullable();
    table.string('fotos', 45).notNullable();
    table.string('marca', 45).notNullable();
    table.string('modelo', 45).notNullable();

    table
      .integer('id_empresa')
      .references('id_usuario')
      .inTable('usuarios')
      .notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('equipamentos');
};
