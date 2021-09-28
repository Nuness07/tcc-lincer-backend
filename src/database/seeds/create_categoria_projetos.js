const { v4: uuidv4 } = require('uuid');

exports.seed = function (knex) {
  return knex('categoria_projetos')
    .del()
    .then(() => knex('categoria_projetos').insert([
      {
        id_categoria_projeto: uuidv4(),
        nome: "Edição de vídeo",
      },
      {
        id_categoria_projeto: uuidv4(),
        nome: "Infraestrutura",
      },
      {
        id_categoria_projeto: uuidv4(),
        nome: "Arte Visual",
      },
      {
        id_categoria_projeto: uuidv4(),
        nome: "Roteirização",
      },
    ]));
};
