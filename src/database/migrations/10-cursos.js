exports.up = function (knex) {
  return knex.schema.createTable('cursos', (table) => {
    table.increments('id_curso').primary();
    table.string('nome', 45).notNullable();
    table.string('descricao', 45).notNullable();
    table.string('pre_requisitos', 45);
    table.string('nivel_curso', 45).notNullable();
    table.float('valor').notNullable();
    table.boolean('is_publicado').notNullable();
    table.boolean('is_aprovado').notNullable();

    table
      .integer('id_categoria_curso')
      .references('id_categoria_curso')
      .inTable('categoria_cursos')
      .notNullable();

    table
      .integer('id_professor')
      .references('id_usuario')
      .inTable('usuarios')
      .notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('cursos');
};
