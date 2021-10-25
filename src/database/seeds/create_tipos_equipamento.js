const { v4: uuidv4 } = require('uuid');

exports.seed = function (knex) {
  return knex('tipos_equipamentos')
    .del()
    .then(() => knex('tipos_equipamentos').insert([
      {
        id_tipo_equipamento: '126ec40e-4e2f-4744-ac01-09e419daf02d',
        nome: "Microfone",
      },
      {
        id_tipo_equipamento: '226ec40e-4e2f-4744-ac01-09e419daf02d',
        nome: "Câmera",
      },
      {
        id_tipo_equipamento: '326ec40e-4e2f-4744-ac01-09e419daf02d',
        nome: "Tripé",
      },
      {
        id_tipo_equipamento: '426ec40e-4e2f-4744-ac01-09e419daf02d',
        nome: "Drones",
      },
    ]));
};
