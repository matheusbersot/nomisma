var modConfig = angular.module('myApp.config');

modConfig.constant('DB_CONFIG', {
  name: 'DB',
  tables: [
    {
      name: 'agencia',
      columns: [
        {name: 'id', type: 'integer primary key'},
        {name: 'nome', type: 'text'},
        {name: 'url', type: 'text'}
      ]
    },
    {
      name: 'moeda',
      columns: [
        {name: 'id', type: 'integer primary key'},
        {name: 'nome', type: 'text'},
        {name: 'sigla', type: 'text'}
      ]
    },
    {
      name: 'agencia_moeda',
      columns: [
        {name: 'id', type: 'integer primary key'},
        {name: 'id_agencia', type: 'integer'},
        {name: 'id_moeda', type: 'integer'},
        {name: 'valor', type: 'float'},
        {name: 'diffUltimaAtualizacao', type: 'integer'}, /* em segundos */
        {name: 'foreign key(id_agencia)', type: 'references agencia(id)'},
        {name: 'foreign key(id_moeda)', type: 'references moeda(id)'}
      ]
    }
  ]
});

modConfig.config(function ($stateProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home.html',
      cache: false
    })
});
