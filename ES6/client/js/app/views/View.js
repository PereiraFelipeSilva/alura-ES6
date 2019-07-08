class View{

   constructor(elemento){

      this._elemento = elemento;
   }

   template(model){

      throw new Error('O método template deve ser implementado nas classes que herdam desta.')
   }

   update(model){

      this._elemento.innerHTML = this.template(model);
   }
}