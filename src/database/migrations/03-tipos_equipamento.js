exports.up = function (knex) {
  return knex.schema.createTable('tipos_equipamentos', (table) => {
    table.uuid('id_tipo_equipamento').primary();
    table.string('nome', 45).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('tipos_equipamentos');
};
