/**
 * FileName:loginctrl.js
 * CreatedBy: suyash,hamid
 * purpose : get data from firebase and encode it
 */
angular.module('myApp')
    .controller("loginCtrl", function($scope, $location,$http) {
        /* this function called on clicking from buttton
         */
         // "Access-Control-Expose-Headers":"Content-Disposition","content-type":"application/json",
//          var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://staging.ekincare.com/v1/core/login",
//   "method": "POST",
//   "headers": {
//     "content-type": "application/x-www-form-urlencoded",
//     "cache-control": "no-cache",
//     "postman-token": "c4bec44c-aa4d-fe0b-1897-9b197bc42006"
//   },
//   "data": {
//     "email": "tech@ekincare.com",
//     "password": "Foobar123"
//   }
// };
/*
Access-Control-Allow-Origin":"*"
  "Access-Control-Allow-Headers": "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With"
*/
        $scope.login = function() {
          console.log("Login");
          $http({
            "method":"POST",
            // "crossDomain": true,
            "url":"https://staging.ekincare.com/v1/core/login",
            "data":{"email":"tech@ekincare.com","password":"Foobar123"}
          }).success(function(data,status,headers,config){
            console.log(headers());
            // console.log("Response headers",response.headers());
                    // console.log(response.headers()["x-token"]);
            // console.log(headers()['X-EKINCARE-KEY']);
            console.log('X-EKINCARE-KEY :: ',headers('X-EKINCARE-KEY'));
          }).error(function(status){
            console.log("Status::",status);
          });
          //$location.path("/main");
        };
    });
