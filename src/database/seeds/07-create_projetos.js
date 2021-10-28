exports.seed = function (knex) {
  return knex('projetos')
    .del()
    .then(() => knex('projetos').insert([
      {
        id_projeto: '754ec25e-4e2f-4214-ac01-09e522daf02d',
        nome_projeto: 'Produzir logo e branding para podcast',
        descricao: 'Preciso de uma pessoa para produzir uma capa para meu podcast, nós atuamos na área do esporte em geral, como futebol, basquete, fórmula 1 e outras coisas, precisamos de todo um conjunto de artes para montar o branding todo da nossa marca',
        habilidades_desejadas: 'Photoshop,Illustrator,Arte Digital,Pacote Adobe, Marketing',
        arquivos: 'arquivos',
        prazo: '30-11-2021 00:00:00',
        preco: 'R$ 10.000',
        aprovado: true,
        impulso: true,
        id_contratante: '245ec41e-4e2f-4745-ac01-09e419daf02d',
        id_prestador: null,
        id_categoria_projeto: '626ec40e-4e2f-4744-ac01-09e419daf04d'
      },
      {
        id_projeto: '782ec25e-4e2f-4214-ac01-09e522daf02d',
        nome_projeto: 'Produzir vinheta para podcast',
        descricao: 'Preciso de uma pessoa para produzir uma vinheta para meu podcast baseado nas cores e artes visuais da minha marca',
        habilidades_desejadas: 'After Effects,Photoshop,VFX',
        arquivos: 'arquivos',
        prazo: '30-11-2021 00:00:00',
        preco: 'R$ 2.000',
        aprovado: false,
        impulso: false,
        id_contratante: '245ec41e-4e2f-4745-ac01-09e419daf02d',
        id_prestador: null,
        id_categoria_projeto: '626ec40e-4e2f-4744-ac01-09e419daf04d'
      },
      {
        id_projeto: '782ec25e-6e2f-4214-ac01-09e522daf02d',
        nome_projeto: 'Montar infraestrutura do meu podcast',
        descricao: 'Ja tenho um imóvel alugado e pronto pra receber toda a infra necessária, preciso de alguem que saiba trabalhar com isso e que tenha experiência',
        habilidades_desejadas: 'Infraestrutura,Câmeras,Micrefones',
        arquivos: 'arquivos',
        prazo: '30-11-2021 00:00:00',
        preco: 'R$ 3.000',
        aprovado: false,
        impulso: false,
        id_contratante: '245ec41e-4e2f-4745-ac01-09e419daf02d',
        id_prestador: null,
        id_categoria_projeto: '626ec40e-4e2f-4744-ac01-09e419daf03d'
      },
    ]));
};
