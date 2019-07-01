class NegociacaoController {

   constructor(){
      
      let $ = document.querySelector.bind(document);
      this._inputData = $('#data');
      this._inputQuantidade = $('#quantidade');
      this._inputValor = $('#valor');
   }

   adiciona(event){

      event.preventDefault();

      let data = new Date(...
         this._inputData.value
            .split('-')
            .map((item, indice) => item - indice % 2)
      );

      /* ... spread operator faz com que a função de map seja aplicada em todos os itens de um array;
      função split que transforma a string em um array utilizando o parâmetro passado como separador;
      uso de arrow function. Não faz uso da palavra 'function' e como a função tem apenas um retorno, não se usa o return nem {} */

      let negociacao = new Negociacao(
         data,
         this._inputQuantidade.value,
         this._inputValor.value
      );

      console.log(negociacao);
      this._inputData.value = '';
      this._inputQuantidade.value = 1;
      this._inputValor.value = 0.0;
      this._inputData.focus();
   }
}