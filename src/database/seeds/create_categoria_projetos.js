const { v4: uuidv4 } = require('uuid');

exports.seed = function (knex) {
  return knex('categoria_projetos')
    .del()
    .then(() => knex('categoria_projetos').insert([
      {
        id_categoria_projeto:'626ec40e-4e2f-4744-ac01-09e419daf02d',
        nome: "Edição de vídeo",
      },
      {
        id_categoria_projeto: '626ec40e-4e2f-4744-ac01-09e419daf03d',
        nome: "Infraestrutura",
      },
      {
        id_categoria_projeto: '626ec40e-4e2f-4744-ac01-09e419daf04d',
        nome: "Arte Visual",
      },
      {
        id_categoria_projeto: '626ec40e-4e2f-4744-ac01-09e419daf05d',
        nome: "Roteirização",
      },
    ]));
};
