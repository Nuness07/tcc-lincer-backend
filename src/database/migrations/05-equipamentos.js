exports.up = function (knex) {
  return knex.schema.createTable('equipamentos', (table) => {
    table.uuid('id_equipamento').primary();
    table.string('nome_equipamento', 100).notNullable();
    table.string('descricao', 5000).notNullable();
    table.string('valor_mes', 45).notNullable();
    table.string('especificacoes', 5000).notNullable();
    table.string('fotos', 45).notNullable();
    table.string('marca', 45).notNullable();
    table.string('modelo', 45).notNullable();

    table
      .uuid('id_empresa_relation')
      .references('id_empresa')
      .inTable('empresas')
      .notNullable();

    table
      .uuid('id_tipo_equipamento')
      .references('id_tipo_equipamento')
      .inTable('tipos_equipamentos')
      .notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('equipamentos');
};
