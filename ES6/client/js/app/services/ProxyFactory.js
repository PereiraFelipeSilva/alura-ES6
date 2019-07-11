class ProxyFactory{

   static create(objeto, props, acao){

    return new Proxy(objeto, {

        get(target, prop, receiver){

            if(props.includes(prop) && typeof(target[prop]) == typeof(Function)){

                return function(){

                console.log(`Interceptando ${prop}`);
                let retorno = Reflect.apply(target[prop], target, arguments); 
                acao(target);
                return retorno;
                }
            }

            return Reflect.get(target, prop, receiver);
        },

        set(target, prop, value, receiver) {

            let retorno = Reflect.set(target, prop, value, receiver);
            if(props.includes(prop)) acao(target);    // só executa acao(target) se for uma propriedade monitorada
            return retorno; 
        }
    });
   }
}