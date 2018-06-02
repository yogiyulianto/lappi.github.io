var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.showMe1 = false;
    $scope.myFunc1 = function() {
        $scope.showMe1 = !$scope.showMe1;
    }

    $scope.showMe2 = false;
    $scope.myFunc2 = function() {
        $scope.showMe2 = !$scope.showMe2;
    }

    $scope.showMe3 = false;
    $scope.myFunc3 = function() {
        $scope.showMe3 = !$scope.showMe3;
    }

    $scope.showMe4 = false;
    $scope.myFunc4 = function() {
        $scope.showMe4 = !$scope.showMe4;
    }

    $scope.showMe5 = false;
    $scope.myFunc5 = function() {
        $scope.showMe5 = !$scope.showMe5;
    }

    $scope.showMe6 = false;
    $scope.myFunc6 = function() {
        $scope.showMe6 = !$scope.showMe6;
    }
});