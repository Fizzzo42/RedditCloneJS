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

    $scope.logout = function () {
    	mydata.postLogout(function (data) {
    		if(data){
    			sessionStorage.redditName = "";
    			sessionStorage.redditPassword = "";
    			$scope.loggedIn = false;
            	$scope.$apply();
    		}
    	});
    	
    };

    $scope.submitNewLink = function() {
        if($scope.title && $scope.url){
            $scope.visible = false;
            mydata.postEntry($scope.title, $scope.url);
        }
        else
            alert("Please enter valid data!");
    };

    // Auto Login if data in session
    if(sessionStorage.redditName && sessionStorage.redditPassword)
    	$scope.login();

});