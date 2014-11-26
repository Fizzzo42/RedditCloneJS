angular.module('RedditApp').controller('MenuCtrl', function MenuCtrl($scope){
	$scope.visible = false;
    $scope.loggedIn = false;
    $scope.username = "";
    $scope.password = "";

    $scope.login = function () {
    	if(sessionStorage.redditName)
    		$scope.username = sessionStorage.redditName;
    	if(sessionStorage.redditPassword)
    		$scope.password = sessionStorage.redditPassword;

        mydata.postLogin($scope.username, $scope.password, function (data) {
            $scope.loggedIn = data;
            $scope.$apply();
        });
    };

    $scope.submitNewLink = function() {
    	mydata.postEntry($scope.title, $scope.url);
    };

    if(sessionStorage.redditName && sessionStorage.redditPassword)
    	$scope.login();

});