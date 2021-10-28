exports.seed = function (knex) {
  return knex('cursos')
    .del()
    .then(() => knex('cursos').insert([
      {
        id_curso: '895ec20e-4e2f-1254-ac01-09e522daf02d',
        nome_curso: 'Intensivão After Effects',
        descricao_curso: 'Esse é um curso voltado pra quem quer aprender bastante sobre after effects e o que conseguimos desenvolver com essa ferramenta maravilhosa da adobe',
        pre_requisitos: 'Computador,After Effects,Adobe',
        nivel_curso: 'Intermediário',
        aula_preview: 'https://youtu.be/SP0387hmlF8',
        valor: 'R$29,90',
        is_publicado: true,
        is_aprovado_curso: true,
        id_categoria_curso_relation: '626ec40e-4e2f-4746-ac01-09e419daf03d',
        id_professor: '245ec41e-4e2f-4745-ac01-09e419daf02d'
      },
      {
        id_curso: '482ec20e-4e2f-1254-ac01-09e522daf02d',
        nome_curso: 'Intensivão Photoshop',
        descricao_curso: 'Esse é um curso voltado pra quem quer aprender bastante sobre Photoshop e o que conseguimos desenvolver com essa ferramenta maravilhosa da adobe',
        pre_requisitos: 'Computador,Photoshop,Adobe',
        nivel_curso: 'Intermediário',
        aula_preview: 'https://youtu.be/FoviF4qDYRY',
        valor: 'R$29,90',
        is_publicado: true,
        is_aprovado_curso: true,
        id_categoria_curso_relation: '626ec40e-4e2f-4746-ac01-09e419daf03d',
        id_professor: '245ec41e-4e2f-4745-ac01-09e419daf02d'
      },
    ]));
};
