class NegociacaoService{

  constructor(){

    this._httpService = new HttpService();
  }

  obterNegociacoesDaSemana(week){

    return new Promise((resolve, reject) => {

      this._httpService
        .get(`negociacoes/${week}`)
        .then(negociacoes => {

          resolve(negociacoes.map(objeto => 
            new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
        })
        .catch(erro => {
          console.log(erro);
          reject('Não foi possível recuperar as informações do servidor.');
        })
    })
  }

  obterNegociacoes(){

    return new Promise((resolve, reject) => {

      Promise.all([
          this.obterNegociacoesDaSemana('semana'),
          this.obterNegociacoesDaSemana('anterior'),
          this.obterNegociacoesDaSemana('retrasada')
      ]).then(periodos => {

          let negociacoes = periodos
              .reduce((dados, periodo) => dados.concat(periodo), [])
              .map(dado => new Negociacao(new Date(dado.data), dado.quantidade, dado.valor ));

          resolve(negociacoes);

      }).catch(erro => reject(erro));
    });
  }

  cadastra(negociacao){

    return ConnectionFactory
      .getConnection()
      .then(connection => new NegociacaoDao(connection))
      .then(dao => dao.adiciona(negociacao))
      .then(() => 'Negociação adicionada com sucesso!')
      .catch(()=> {throw new Error('Não foi possível adicionar a negociação.')});
  }
}