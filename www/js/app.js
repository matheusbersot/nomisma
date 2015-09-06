// Ionic Starter App


// Inicializando módulos
angular.module('myApp.config', []);
angular.module('myApp.services', []);

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ui.router', 'myApp.config', 'myApp.services'])

.run(function($ionicPlatform, DB, $state) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    //Inicializando o banco de dados
    DB.init().then(function(valor)
    {
      $state.go("home");
    });
  });
})
