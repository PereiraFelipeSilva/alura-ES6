class NegociacaoService{

  obterNegociacoes(week){

    return new Promise((resolve, reject) => {

      let xhr = new XMLHttpRequest;
        xhr.open('GET', `negociacoes/${week}`);
        xhr.onreadystatechange = ()=> {
    
          if(xhr.readyState == 4){
            
            if(xhr.status == 200){
    
              resolve(JSON.parse(xhr.responseText)
                .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
            } else {
    
              console.log(xhr.responseText);
              reject('Não foi possível recuperar as informações do servidor.');
            }
          }
        }
      xhr.send();
    });
  }
}