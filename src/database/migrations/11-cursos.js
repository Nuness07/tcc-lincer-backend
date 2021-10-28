exports.up = function (knex) {
  return knex.schema.createTable('cursos', (table) => {
    table.uuid('id_curso').primary();
    table.string('nome_curso', 45).notNullable();
    table.string('descricao_curso', 4000).notNullable();
    table.string('pre_requisitos', 45);
    table.string('nivel_curso', 45).notNullable();
    table.string('aula_preview', 200).notNullable();
    table.string('valor').notNullable();
    table.boolean('is_publicado').notNullable();
    table.boolean('is_aprovado_curso').notNullable();

    table
      .uuid('id_categoria_curso_relation')
      .references('id_categoria_curso')
      .inTable('categoria_cursos')
      .notNullable();

    table
      .uuid('id_professor')
      .references('id_usuario')
      .inTable('usuarios')
      .notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('cursos');
};
