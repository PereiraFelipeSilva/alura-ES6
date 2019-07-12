class NegociacaoService{

  obterNegociacoesDaSemana(callbackfunction){

  let xhr = new XMLHttpRequest;
    xhr.open('GET', 'negociacoes/semana');
    xhr.onreadystatechange = ()=> {

      if(xhr.readyState == 4){
        
        if(xhr.status == 200){

          callbackfunction(null, JSON.parse(xhr.responseText)
            .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
        } else {

          console.log(xhr.responseText);
          callbackfunction('Não foi possível recuperar as informações do servidor.', null);
        }
      }
    }
    xhr.send();
  }
}