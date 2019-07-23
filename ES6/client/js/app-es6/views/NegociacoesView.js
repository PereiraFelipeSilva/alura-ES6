import {View} from './View';

export class NegociacoesView extends View{

   template(model){

      return `
         <table class="table table-hover table-bordered">
            <thead>
               <tr>
                  <th onclick="negociacaoController.ordenarColuna('data')">DATA</th>
                  <th onclick="negociacaoController.ordenarColuna('quantidade')">QUANTIDADE</th>
                  <th onclick="negociacaoController.ordenarColuna('valor')">VALOR</th>
                  <th onclick="negociacaoController.ordenarColuna('volume')">VOLUME</th>
               </tr>
            </thead>
            
            <tbody>
               ${
                  model.negociacoes.map(negociacao => `
                     <tr>
                        <td>${DateHelper.dataParaTexto(negociacao.data)}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                        <td>${negociacao.volume}</td>
                     </tr>
                  `).join('')
               }
            </tbody>
            
            <tfoot>
               <td colspan="3"></td>
               <td>${model.volumeTotal}</td>
            </tfoot>
         </table>
      `;
   }
}