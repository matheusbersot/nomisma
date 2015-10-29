/**
 * Created by matheus on 06/09/15.
 */
angular.module('myApp.services')
  .factory('agenciaMoedaDbSrv', ['DB',
    function (DB) {

      var self = this;

      self.obterQtdAgencias = function () {
        return DB.query('SELECT count(*) FROM agencia')
          .then(function (resultado) {
            return DB.fetch(resultado);
          },
          function (erro) {
            console.log('Falhou: ' + erro.message);
          });
      };


      self.obterQtdMoedas = function () {
        return DB.query('SELECT count(*) FROM moeda')
          .then(function (resultado) {
            return DB.fetch(resultado);
          },
          function (erro) {
            console.log('Falhou: ' + erro.message);
          });
      };

      self.obterQtdAgenciasMoedas = function () {
        return DB.query('SELECT count(*) FROM agencia_moeda')
          .then(function (resultado) {
            return DB.fetch(resultado);
          },
          function (erro) {
            console.log('Falhou: ' + erro.message);
          });
      };

      self.inserirAgencias = function(vetorAgencias){

        var sqlQuery = '';

        for (var i = 0; i < vetorAgencias.length; ++i) {

          sqlQuery += 'INSERT INTO agencia VALUES ('+vetorAgencias[i].id+','+vetorAgencias[i].nome+
            ','+vetorAgencias[i].url+');';
        }

        return DB.query(sqlQuery)
          .then(function (resultado) {
            console.log("Inseriu registro com ID " + resultado.insertId + " na tabela.");
          },
          function (erro) {
            console.log('Falhou: ' + erro.message);
          });
      };


      self.inserirMoedas = function(vetorMoedas){

        var sqlQuery = '';

        for (var i = 0; i < vetorMoedas.length; ++i) {

          sqlQuery += 'INSERT INTO moeda VALUES ('+vetorMoedas[i].id+','+vetorMoedas[i].nome+
          ','+vetorMoedas[i].sigla+');';
        }

        return DB.query(sqlQuery)
          .then(function (resultado) {
            console.log("Inseriu registro com ID " + resultado.insertId + " na tabela.");
          },
          function (erro) {
            console.log('Falhou: ' + erro.message);
          });
      };


      self.inserirAgenciasMoedas = function(vetorAgenciasMoedas){

        var sqlQuery = '';

        for (var i = 0; i < vetorMoedas.length; ++i) {
          sqlQuery += 'INSERT INTO agencia_moeda VALUES ('+vetorMoedas[i].id+','+vetorMoedas[i].id_agencia+
          ','+vetorMoedas[i].id_moeda+','+vetorMoedas[i].valor+','+vetorMoedas[i].diffUltimaAtualizacao+');';
        }

        return DB.query(sqlQuery)
          .then(function (resultado) {
            console.log("Inseriu registro com ID " + resultado.insertId + " na tabela.");
          },
          function (erro) {
            console.log('Falhou: ' + erro.message);
          });
      };

      return self;
    }]);
