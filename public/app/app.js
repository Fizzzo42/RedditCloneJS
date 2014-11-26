'use strict';

/* Controllers */
var redditApp = angular.module('RedditApp', [
    'ngRoute']);


redditApp.controller('SubmitNewLinkCtrl', ['$scope' ,function ($scope) {
    $scope.visible = false;
    $scope.loggedIn = false;

    $scope.login = function () {
        mydata.postLogin($scope.username, $scope.password, function (data) {
            //$scope.loggedIn = true;
            $scope.loggedIn = data;
            alert(data);
            //data;
        });
    };
}]);

redditApp.controller('dataController', ['$scope', function ($scope) {
    $scope.entries = [];

    $scope.voteUp = function (id) {
        mydata.postrateUp(id);
    };

    $scope.voteDown = function (id) {
        mydata.postrateDown(id);
    };

}]);

redditApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
}]);
