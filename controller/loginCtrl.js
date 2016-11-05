/**
 * FileName:loginctrl.js
 * CreatedBy: suyash,hamid
 * purpose : get data from firebase and encode it
 */
angular.module('myApp')
    .controller("loginCtrl", function($scope, $location,$http) {
        /* this function called on clicking from buttton
         */
        $scope.login = function() {
          console.log("Login");
          $http({
            method:"POST",
            url:"https://staging.ekincare.com/v1/core/login",
            headers:{"content-type":"application/json", "Access-Control-Expose-Headers":"*"},
            data:{email:$scope.email,password:$scope.password}
          }).success(function(data, status, headers, config){
            // console.log("data::",data);
            console.log("Header:: ",headers());
            // console.log('status :: ',status);
            // console.log('config :: ',config);
            console.log('X-EKINCARE-KEY :: ',headers()['X-EKINCARE-KEY']);
          }).error(function(status){
            console.log("Status::",status);
          });
          //$location.path("/main");
        };
    });
