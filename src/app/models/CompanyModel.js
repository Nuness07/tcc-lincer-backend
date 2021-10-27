const { v4: uuidv4 } = require('uuid');
const connection = require('../../database/connection');

class CompanyModel {
  async findAll() {
    const rows = await connection('empresas');
    return rows;
  }

  async findById(id) {
    let row = {};
    await connection('empresas').select(['empresas.*', 'equipamentos.* as equipamento']).where('id_empresa', id).leftJoin('equipamentos', 'equipamentos.id_empresa_relation', 'empresas.id_empresa')
      .then((data) => {
        const empresa = {
          id_empresa: data[0].id_empresa,
          email: data[0].email,
          senha: data[0].senha,
          nome: data[0].nome,
          cnpj: data[0].cnpj,
          cep: data[0].cep,
          uf: data[0].uf,
          city: data[0].city,
          street: data[0].street,
          number: data[0].number,
          complement: data[0].complement,
          telefone: data[0].telefone,
          equipamentos: [],
        };
        
        if(data[0].id_equipamento){
          data.forEach(((equipamento) => {
            const equip = {
              id_equipamento: equipamento.id_equipamento,
              nome: equipamento.nome_equipamento,
              descricao: equipamento.descricao,
              valor_mes: equipamento.valor_mes,
              especificacoes: equipamento.especificacoes,
              fotos: equipamento.fotos,
              marca: equipamento.marca,
              modelo: equipamento.modelo,
              categoria: equipamento.id_tipo_equipamento
            };
            empresa.equipamentos.push(equip);
          }));
        }
        row = empresa;
      });
    return row;
  }

  async findByEmail(email) {
    const [row] = await connection('empresas').where('email', email);
    return row;
  }

  async create(body) {
    const userBody = {
      id_empresa: uuidv4(),
      email: body.email,
      senha: body.senha,
      nome: body.nome,
      cnpj: body.cnpj,
      cep: body.cep,
      uf: body.uf,
      city: body.city,
      street: body.street,
      number: body.number,
      complement: body.complement,
      telefone: body.telefone,
    };
    const row = await connection('empresas').returning('*').insert(userBody);

    return row;
  }

  // async update(id){
  //   const
  // }

  async delete(id) {
    const deleteOp = await connection('empresas')
      .where('id_empresa', id).del();

    return deleteOp;
  }
}

module.exports = new CompanyModel();
