/**
 * Created by matheus on 06/09/15.
 */
angular.module('myApp.services')
  .factory('constanteSrv', function () {

    /*Tipos de Movimentação*/
    this.TIMEOUT_EXECUCAO_WEBSERVICE = 5000; //5s  = 5000 ms

    return this;
  });
