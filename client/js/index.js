let campos = [
   document.querySelector('#data'),
   document.querySelector('#quantidade'),
   document.querySelector('#valor')
];

document.querySelector('.form').addEventListener('submit', function(event) {
   event.preventDefault();

   let linha = document.createElement('tr');
   let tbody = document.querySelector('tbody');

   campos.forEach(function(campo){
      let coluna = document.createElement('td');
      coluna.innerHTML = campo.value;
      linha.appendChild(coluna);
   });
   tdVolume = document.createElement('td');
   tdVolume.innerHTML = campos[1].value * campos[2].value;
   linha.appendChild(tdVolume);
   tbody.appendChild(linha);

   campos[0].value = '';
   campos[1].value = 1;
   campos[2].value = 0;
   campos[0].focus();
});