exports.up = function (knex) {
  return knex.schema.createTable('projetos', (table) => {
    table.uuid('id_projeto').primary();
    table.string('nome_projeto', 45).notNullable();
    table.string('habilidades_desejadas', 45).notNullable();
    table.string('arquivos', 45).notNullable();
    table.float('preco').notNullable();
    table.boolean('aprovado');
    table.boolean('impulso');

    table
      .uuid('id_contratante')
      .references('id_usuario')
      .inTable('usuarios');

    table
      .uuid('id_prestador')
      .references('id_usuario')
      .inTable('usuarios')
      .notNullable();

    table
      .uuid('id_categoria_projeto')
      .references('id_categoria_projeto')
      .inTable('categoria_projetos')
      .notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('projetos');
};
