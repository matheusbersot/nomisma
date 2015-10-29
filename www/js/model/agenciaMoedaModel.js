/**
 * Created by matheus on 06/09/15.
 */
angular.module('myApp.models').factory('AgenciaMoeda', [ function (){

  function AgenciaMoeda(dados) {

    if (dados) {
      this.id = dados.id;
      this.id_agencia = dados.id_agencia;
      this.id_moeda = dados.id_moeda;
      this.id_moeda = dados.id_moeda;
      this.valor = dados.valor;
      this.diffUltimaAtualizacao = dados.diffUltimaAtualizacao;
    }
  };

  return AgenciaMoeda;
}]);
