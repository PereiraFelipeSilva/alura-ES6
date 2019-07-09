class ListaNegociacoes{

   constructor(escutador){

      this._negociacoes = [];
      this._escutador = escutador;
   };

   adiciona(negociacao){

      this._negociacoes.push(negociacao);
      this._escutador(this);
   };

   get negociacoes(){

      return [].concat(this._negociacoes);
   };

   esvazia(){

      this._negociacoes = [];
      this._escutador(this);
   };
};