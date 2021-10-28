exports.seed = function (knex) {
  return knex('modulos')
    .del()
    .then(() => knex('modulos').insert([
      {
        id_modulo: '578ec40e-4e5f-1245-ac01-09e419daf02d',
        nome_modulo: "Iniciante em After Effects",
        id_curso_relation: "895ec20e-4e2f-1254-ac01-09e522daf02d"
      },
      {
        id_modulo: '578ec40e-4e5f-1875-ac01-09e419daf02d',
        nome_modulo: "Efeitos do After Effects",
        id_curso_relation: "895ec20e-4e2f-1254-ac01-09e522daf02d"
      },
      {
        id_modulo: '578ec40e-4e5f-1245-ac87-09e419daf02d',
        nome_modulo: "Segredos do After Effects",
        id_curso_relation: "895ec20e-4e2f-1254-ac01-09e522daf02d"
      },
    ]));
};
