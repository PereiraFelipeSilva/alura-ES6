class DateHelper {

   constructor(){

      throw new Error('Esta classe não pode ser instanciada.');
   }

   static dataParaTexto(data){

      return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
   }

   static textoParaData(texto){

      if(!/\d{4}-\d{2}-\d{2}/.test(texto)){
         throw new Error('A data deve estar no formato YYYY-MM-DD')
      }

     return new Date(...texto.split('-').map((item, indice) => item - indice % 2)
      )
   }
}

/* ... spread operator faz com que a função de map seja aplicada em todos os itens de um array;
função split que transforma a string em um array utilizando o parâmetro passado como separador;
uso de arrow function. Não faz uso da palavra 'function' e como a função tem apenas um retorno, não se usa o return nem {} */