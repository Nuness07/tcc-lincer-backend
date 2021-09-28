exports.up = function (knex) {
  return knex.schema.createTable('empresas', (table) => {
    table.uuid('id_empresa').primary();
    table.string('email', 160).notNullable();
    table.string('senha', 160).notNullable();
    table.string('nome', 200).notNullable();
    table.string('cnpj', 45).notNullable();
    table.string('cep', 45).notNullable();
    table.string('uf', 25).notNullable();
    table.string('city', 60).notNullable();
    table.string('street', 160).notNullable();
    table.string('number', 45).notNullable();
    table.string('complement', 45).notNullable();
    table.string('telefone', 20).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('empresas');
};
