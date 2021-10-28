exports.up = function (knex) {
  return knex.schema.createTable('usuarios', (table) => {
    table.uuid('id_usuario').primary();
    table.string('email', 45).notNullable();
    table.string('senha', 45).notNullable();
    table.string('nome', 45).notNullable();
    table.string('sobrenome', 160).notNullable();
    table.string('cpf', 45);
    table.string('cep', 45).notNullable();
    table.string('uf', 25).notNullable();
    table.string('city', 60).notNullable();
    table.string('street', 160).notNullable();
    table.string('number', 45).notNullable();
    table.string('complement', 45).notNullable();
    table.string('foto', 45).notNullable();
    table.string('descricao', 500);
    table.string('link_deezer', 160);
    table.string('link_facebook', 160);
    table.string('link_instagram', 160);
    table.string('link_spotify', 160);
    table.string('link_youtube', 160);
    table.string('link_twitch', 160);
    table.boolean('is_professor').notNullable();
    table.boolean('is_freelancer').notNullable();
    table.string('titulo_profissional', 160);
    table.string('descricao_freelancer', 5000);
    table.string('experiencia_profissional', 5000);
    table.string('principais_habilidades', 160);
    table.boolean('is_professor_aprovado');
    table.boolean('is_freelancer_aprovado');
    table.string('pergunta_professor_1', 160);
    table.string('pergunta_professor_2', 160);
    table.string('pergunta_professor_3', 160);
    table.boolean('freelancer_verificado');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('usuarios');
};
