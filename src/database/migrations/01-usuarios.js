exports.up = function (knex) {
  return knex.schema.createTable('usuarios', (table) => {
    table.uuid('id_usuario').primary();
    table.string('email', 45).notNullable();
    table.string('senha', 45).notNullable();
    table.string('nome', 45);
    table.string('sobrenome', 45);
    table.string('cpf', 45);
    table.string('endereco', 45).notNullable();
    table.string('complemento', 45).notNullable();
    table.string('foto', 45).notNullable();
    table.string('descricao', 45);
    table.string('link_deezer', 45);
    table.string('link_facebook', 45);
    table.string('link_instagram', 45);
    table.string('link_spotify', 45);
    table.string('link_youtube', 45);
    table.string('link_twitch', 45);
    table.boolean('is_professor').notNullable();
    table.boolean('is_freelancer').notNullable();
    table.boolean('is_empresa').notNullable();
    table.string('titulo_profissional', 45);
    table.string('descricao_freelancer', 45);
    table.string('experiencia_profissional', 45);
    table.string('principais_habilidades', 45);
    table.boolean('is_professor_aprovado');
    table.boolean('is_freelancer_aprovado');
    table.string('pergunta_professor_1', 45);
    table.string('pergunta_professor_2', 45);
    table.string('pergunta_professor_3', 45);
    table.boolean('freelancer_verificado');
    table.string('cnpj', 45);
    table.boolean('empresa_parceira');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('usuarios');
};
