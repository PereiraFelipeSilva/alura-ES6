class MensagemView extends View{

   template(model){

      return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
      // se model.texto for false (ainda sem conteúdo), o método retorna um parágrafo sem a classe do bootstrap e fica escondido.
   }
}