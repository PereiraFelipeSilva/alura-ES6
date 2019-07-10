class Pessoa {

    constructor(nome) {
        this._nome = nome;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome;
    }

    grita(frase) {
        return `${this._nome} grita ${frase}`;
    }
}

let pessoa = new Proxy(new Pessoa('Barney'), {

        get(target, prop, receiver) {
            if(prop == 'grita' && typeof(target[prop]) == typeof(Function)) {

                return function() {
                    console.log(`Interceptei o método: ${prop}, por isso estou exbindo essa mensagem!`);    
                    return Reflect.apply(target[prop], target, arguments);       
                }
            }
            return Reflect.get(target, prop, receiver);
        }
    });

   console.log(pessoa.grita('Olá'));