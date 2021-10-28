exports.seed = function (knex) {
  return knex('roteiros')
    .del()
    .then(() => knex('roteiros').insert([
      {
        id_roteiro: '963ec40e-4e2f-4214-ac01-09e419daf02d',
        nome_roteiro: "Roteiro Vídeo 25/10",
        texto: "Qual a importância de um bom roteiro? Quando se fala em produção de vídeos, muita gente pensa logo em equipamentos técnicos de gravação, como câmera, iluminação e estúdio. Porém, antes de chegar na etapa de gravação, quem quer produzir vídeos para negócios ou ganhar dinheiro com esse material precisa saber que existem outros processos importantes que não devem ser de forma nenhuma negligenciados: o planejamento e a produção de um roteiro. Sem essas duas etapas, seu vídeo fica sem direcionamento, sem objetivo, e pode acabar fracassando ainda durante as filmagens. O planejamento e um bom roteiro é que vão guiar toda a produção do seu vídeo e ainda esquematizar as cenas, ordem das falas, marcar os letterings e legendas que precisam ser inseridos, os movimentos de câmera e também garantir que seu vídeo tenha uma ordem lógica, com início, meio e fim.",
        id_usuario_relation: "245ec41e-4e2f-4745-ac01-09e419daf02d" 
      },
      {
        id_roteiro: '963ec40e-4e2f-1244-ac01-09e419daf02d',
        nome_roteiro: "Roteiro Podcast 30/10",
        texto: "Existem muitos propósitos diferentes para a gravação de vídeo. Pode ser para compartilhar suas ideias sobre um evento atual, promover um produto ou serviço, criar brand awareness ou  simplesmente capturar memórias de um momento importante no tempo. Independentemente do propósito, é sempre útil ter um roteiro de vídeo que o ajudará a articular o que você quer dizer antes da gravação. Este artigo irá ensiná-lo como escrever um roteiro para qualquer ocasião e dar exemplos de cada tipo para que quando chegar a hora de gravar seu próximo projeto de vídeo.",
        id_usuario_relation: "245ec41e-4e2f-4745-ac01-09e419daf02d",
      },
    ]));
};
