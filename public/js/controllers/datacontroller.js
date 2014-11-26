angular.module('RedditApp').controller('dataController', ['$scope', function ($scope) {
    $scope.entries = [];

    $scope.voteUp = function (id) {
        mydata.postrateUp(id);
    };

    $scope.voteDown = function (id) {
        mydata.postrateDown(id);
    };

}]);
