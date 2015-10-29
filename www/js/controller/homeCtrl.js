/**
 * Created by matheus on 06/09/15.
 */
var modController = angular.module('myApp.controllers');

modController.controller('HomeProcessoController', ['$scope', 'agenciaSrv', 'agenciaMoedaDbSrv',
  function ($scope,agenciaSrv,agenciaMoedaDbSrv) {

    $scope.listaProcessos = [];

    this.init = function () {

      inicializarBD();

    };

    this.inicializarBD = function (){
      //verifica se há agências no BD
      //se não houver, busca no servidor
      agenciaMoedaDbSrv.obterQtdAgencias()
        .then(function (resultado) {
          if(resultado == 0){
             var vetorAgencias = agenciaSrv.obterTodasAgencias();
              agenciaMoedaDbSrv.inserirAgencias(vetorAgencias);
          }
        }
      );

      //verifica se há moedas no BD
      //se não houver, busca no servidor
      agenciaMoedaDbSrv.obterQtdMoedas()
        .then(function (resultado) {
          if(resultado == 0){
            //TODO: buscar no servidor
          }
        }
      );

      //verifica se há agências_moedas no BD
      //se não houver, busca no servidor
      agenciaMoedaDbSrv.obterQtdAgenciasMoedas()
        .then(function (resultado) {
          if(resultado == 0){
            //TODO: buscar no servidor
          }
        }
      );
    };

    this.init();

  }]);
