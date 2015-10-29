/**
 * Created by matheus on 06/09/15.
 */
var modModel = angular.module('myApp.models');

modModel.factory('Agencia', [ function (){

  function Agencia(dados) {

    if (dados) {
      this.id = dados.id;
      this.nome = dados.nome;
      this.url = dados.url;
    }
  };

  return Agencia;
}]);
