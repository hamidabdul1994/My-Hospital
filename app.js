angular.module("myApp",["ui.router","ngMaterial"])
.config(function($stateProvider,$urlRouterProvider,$httpProvider){
  // $httpProvider.defaults.useXDomain = true;
  // $httpProvider.defaults.headers.common["x-token"] = "";
    // $httpProvider.defaults.headers.common["x-token"] = "";
  // $httpProvider.interceptors.push('httpRequestInterceptor');

  $urlRouterProvider.otherwise("login");
  $stateProvider
  .state("login",{
    url:"/login",
    templateUrl:"template/login.html",
    controller:"loginCtrl"
  })
  .state("main",{
    url:"/main",
    templateUrl:"template/main.html",
    controller:"mainCtrl"
  })
})
// .factory('httpRequestInterceptor', ['$rootScope', function($rootScope) {
//     return {
//         request: function($config) {
//             $config.headers['Authorization'] = 'Basic ' + $rootScope.apiKey;
//             return $config;
//         }
//     };
// }]);
