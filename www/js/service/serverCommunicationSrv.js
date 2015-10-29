/**
 * Created by matheus on 06/09/15.
 */
angular.module('myApp.services')
  .factory('serverCommunicationSrv', ['$http', '$timeout', 'constanteSrv',
    function ($http, $timeout, onstanteSrv) {

      var self = this;

      self.getDataFromURL = function (url) {

        var deferred = $q.defer();

        //TODO: Verificar se a internet está ligada

        $timeout(function () {

          $http.get(url).
            then(function (resposta) {
              return resposta;
            }, function (erro) {
              deferred.reject(erro.message);
            });

        }, constanteSrv.TIMEOUT_EXECUCAO_WEBSERVICE)
          .then(function (resposta) {
            deferred.resolve(resposta);
          },
          function (msgErro) {
            deferred.reject(msgErro);
          });

        return deferred.promise;
      };

      return self;

    }]);
