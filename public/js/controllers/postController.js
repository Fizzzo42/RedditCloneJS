angular.module('RedditApp').controller('postController', ['$scope','$routeParams', function ($scope, $routeParams) {
	$scope.postId = $routeParams.postId;
    $scope.entry = [];

    $scope.voteUp = function (id) {
        mydata.postrateUp(id);
    };

    $scope.voteDown = function (id) {
        mydata.postrateDown(id);
    };

}]);
