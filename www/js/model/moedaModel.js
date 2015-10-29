/**
 * Created by matheus on 06/09/15.
 */
angular.module('myApp.models').factory('Moeda', [ function (){

  function Moeda(dados) {

    if (dados) {
      this.id = dados.id;
      this.nome = dados.nome;
      this.sigla = dados.sigla;
    }
  };

  return Moeda;
}]);
