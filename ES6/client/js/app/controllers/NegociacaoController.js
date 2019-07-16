class NegociacaoController {

   constructor(){
      
      let $ = document.querySelector.bind(document);
      this._inputData = $('#data');
      this._inputQuantidade = $('#quantidade');
      this._inputValor = $('#valor');

      this._listaNegociacoes = new Bind(
         new ListaNegociacoes(),
         new NegociacoesView($('#negociacoesView')),
         'adiciona', 'esvazia', 'ordenarColuna', 'inverteOrdem');

      this._ordemAtual = '';

      this._mensagem = new Bind(
         new Mensagem(),
         new MensagemView($('#mensagemView')),
         'texto');
   }

   adiciona(event){

      event.preventDefault();
      this._listaNegociacoes.adiciona(this._criaNegociacao());
      this._mensagem.texto = 'Negociação adicionada com sucesso!';
      this._limpaFormulario();
   }

   importarNegociacoes(){

      let service = new NegociacaoService();
      
      Promise.all([
         service.obterNegociacoes('semana'),
         service.obterNegociacoes('anterior'),
         service.obterNegociacoes('retrasada')
      ])
      .then(negociacoes => {

         negociacoes
            .reduce((novoArray, arrayInicial) => novoArray.concat(arrayInicial), [])
            .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
         this._mensagem.texto = 'Negociações importadas com sucesso!';
      })
      .catch(erro => {

         this._mensagem.texto = erro;
         return;
      });
      this._limpaFormulario();
   }

   apaga(){

      this._listaNegociacoes.esvazia();
      this._mensagem.texto = 'Negociações excluídas com sucesso!';
      this._limpaFormulario();
   }

   _criaNegociacao(){

      return new Negociacao(
         DateHelper.textoParaData(this._inputData.value),
         this._inputQuantidade.value,
         this._inputValor.value
      );
   }

   _limpaFormulario(){
      
      this._inputData.value = '';
      this._inputQuantidade.value = 1;
      this._inputValor.value = 0.0;
      this._inputData.focus();
   }

   ordenarColuna(coluna){

      if(this._ordemAtual == coluna){

         this._listaNegociacoes.inverteOrdem();
      } else {

         this._listaNegociacoes.ordenarColuna((a, b) => a[coluna] - b[coluna]);
      }
      this._ordemAtual = coluna;
   }
}