const { v4: uuidv4 } = require('uuid');

exports.seed = function (knex) {
  return knex('tipos_equipamentos')
    .del()
    .then(() => knex('tipos_equipamentos').insert([
      {
        id_tipo_equipamento: uuidv4(),
        nome: "Microfone",
      },
      {
        id_tipo_equipamento: uuidv4(),
        nome: "Câmera",
      },
      {
        id_tipo_equipamento: uuidv4(),
        nome: "Tripé",
      },
      {
        id_tipo_equipamento: uuidv4(),
        nome: "Drones",
      },
    ]));
};
