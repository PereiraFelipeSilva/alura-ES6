class NegociacaoService{

  constructor(){

    this._httpService = new HttpService();
  }

  obterNegociacoes(week){

    return new Promise((resolve, reject) => {

      this._httpService
        .get(`negociacoes/${week}`)
        .then(negociacoes => {

          console.log(negociacoes);
          resolve(negociacoes.map(objeto => 
            new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
        })
        .catch(erro => {
          console.log(erro);
          reject('Não foi possível recuperar as informações do servidor.');
        })
    })
  }
}