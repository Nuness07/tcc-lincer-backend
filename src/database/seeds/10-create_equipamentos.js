exports.seed = function (knex) {
  return knex('equipamentos')
    .del()
    .then(() => knex('equipamentos').insert([
      {
        id_equipamento:'741ec40e-5e2f-2545-ac01-25e419daf02d',
        nome_equipamento: "Canon EOS Rebel T7 Ef-S ",
        descricao: "11 funções personalizadas com 33 definições ajustáveis com a câmera, Cena Automática Inteligente e Estilo de Imagem Automático Compatível com a linha completa de lentes EF/EF-S e flashes Speedlite da Canon Gravação simultânea em RAW + JPEG, Live View Mode, Correção da iluminação periférica",
        valor_mes: "R$20",
        especificacoes: "11 funções personalizadas com 33 definições ajustáveis com a câmera, Cena Automática Inteligente e Estilo de Imagem Automático Compatível com a linha completa de lentes EF/EF-S e flashes Speedlite da Canon Gravação simultânea em RAW + JPEG, Live View Mode, Correção da iluminação periférica",
        fotos: 'fotos',
        marca: 'Canon',
        modelo: 'Canon',
        id_empresa_relation: '874ec40e-5e2f-4745-ac01-09e419daf02d',
        id_tipo_equipamento: '226ec40e-4e2f-4744-ac01-09e419daf02d'
      },
      {
        id_equipamento:'785ec40e-5e2f-2545-ac01-25e419daf02d',
        nome_equipamento: "Microfone Profissional Samsung",
        descricao: "11 funções personalizadas com 33 definições ajustáveis com a câmera, Cena Automática Inteligente e Estilo de Imagem Automático Compatível com a linha completa de lentes EF/EF-S e flashes Speedlite da Canon Gravação simultânea em RAW + JPEG, Live View Mode, Correção da iluminação periférica",
        valor_mes: "R$20",
        especificacoes: "11 funções personalizadas com 33 definições ajustáveis com a câmera, Cena Automática Inteligente e Estilo de Imagem Automático Compatível com a linha completa de lentes EF/EF-S e flashes Speedlite da Canon Gravação simultânea em RAW + JPEG, Live View Mode, Correção da iluminação periférica",
        fotos: 'fotos',
        marca: 'Samsung',
        modelo: 'Samsung',
        id_empresa_relation: '874ec40e-5e2f-4745-ac01-09e419daf02d',
        id_tipo_equipamento: '226ec40e-4e2f-4744-ac01-09e419daf02d'
      },
    ]));
};
