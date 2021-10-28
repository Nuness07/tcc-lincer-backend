exports.seed = function (knex) {
  return knex('categoria_cursos')
    .del()
    .then(() => knex('categoria_cursos').insert([
      {
        id_categoria_curso:'626ec40e-4e2f-4745-ac01-09e419daf02d',
        nome: "Infraestrutura",
      },
      {
        id_categoria_curso: '626ec40e-4e2f-4746-ac01-09e419daf03d',
        nome: "Ferramentas",
      },
      {
        id_categoria_curso: '626ec40e-4e2f-4748-ac01-09e419daf04d',
        nome: "Roteirização",
      },
      {
        id_categoria_curso: '626ec40e-4e2f-4742-ac01-09e419daf05d',
        nome: "Marketing",
      },
    ]));
};
