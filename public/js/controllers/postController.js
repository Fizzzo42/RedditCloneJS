angular.module('RedditApp').controller('postController', ['$scope','$routeParams', function ($scope, $routeParams) {
	$scope.postId = $routeParams.postId;
    $scope.entry = [];

    $scope.voteUp = function (id) {
        mydata.postrateUp(id);
    };

    $scope.voteDown = function (id) {
        mydata.postrateDown(id);
    };

    $scope.commentVoteUp = function (id){
    	mydata.commentRateUp(id);
    };

    $scope.commentVoteDown = function (id){
		mydata.commentRateDown(id);
    };
    
    $scope.submitNewComment = function(){
    	mydata.postCommentOnEntry($scope.entry.id, $scope.taComment);
    	$scope.taComment = "";
    };
	  
}]);
