let carro = {
   velocidade: 100,
   acelera : () =>  {
       console.log(this);
       console.log(`Carro a ${this.velocidade} km por hora!`);
   }
};
carro.acelera();