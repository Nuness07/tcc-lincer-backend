exports.up = function (knex) {
  return knex.schema.createTable('projetos', (table) => {
    table.increments('id_projeto').primary();
    table.string('nome', 45).notNullable();
    table.string('habilidades_desejadas', 45).notNullable();
    table.string('arquivos', 45).notNullable();
    table.float('preco').notNullable();
    table.boolean('aprovado');
    table.boolean('impulso');

    table
      .integer('id_contratante')
      .references('id_usuario')
      .inTable('usuarios');

    table
      .integer('id_prestador')
      .references('id_usuario')
      .inTable('usuarios')
      .notNullable();

    table
      .integer('id_categoria_projeto')
      .references('id_categoria_projeto')
      .inTable('categoria_projetos')
      .notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('projetos');
};
