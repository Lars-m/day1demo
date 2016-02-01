var app = angular.module("day1demo", []);

app.controller("demoCtrl", function ($scope, $http) {
  $http.get("https://jokes-plaul.rhcloud.com/api/joke").then(function ok(res) {
    $scope.joke = res.data.joke;
    $scope.ref = res.data.reference;
  }, function err(res) {

  });
});

