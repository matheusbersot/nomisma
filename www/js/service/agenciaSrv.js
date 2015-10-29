/**
 * Created by matheus on 06/09/15.
 */
angular.module('myApp.services')
  .factory('agenciaSrv', ['serverCommunicationSrv', 'Agencia',
    function (serverCommunicationSrv, Agencia) {

      var self = this;

      self.obterTodasAgencias = function () {

        var deferred = $q.defer();

        var url = '';
        serverCommunicationSrv.getDataFromURL(url)
          .then(function (dadosJson) {

            var respostaJson = JSON.parse(dadosJson);

            if (respostaJson.erro){
              deferred.reject(respostaJson.erro);
            }
            else{
              var vetorAgencias = [];

              for (var i = 0; i < respostaJson.length; ++i) {
                var agencia = new Agencia(respostaJson[i]);
                vetorAgencias.push(agencia);
              }
              deferred.resolve(vetorProcessos);
            }
          },
          function (msgErro) {
            deferred.reject(msgErro);
          }
        );

        return deferred.promise;
      };

      return self;

    }]);
