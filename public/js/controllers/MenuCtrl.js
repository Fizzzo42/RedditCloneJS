angular.module('RedditApp').controller('MenuCtrl', function MenuCtrl($scope){
	$scope.newLinkVisible = false;
    $scope.registerVisible = false;
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
            $scope.newLinkVisible = false;
            $scope.registerVisible = false;
            mydata.postEntry($scope.title, $scope.url);
        }
        else
            alert("Please enter valid data!");
    };

    $scope.register = function(){
        if($scope.reg_id && $scope.reg_pw1 && $scope.reg_pw2)
            if($scope.reg_pw1 === $scope.reg_pw2)
                mydata.postRegister($scope.reg_id, $scope.reg_pw1, function(data){
                    if(data){
                        //Login
                        $scope.username = $scope.reg_id;
                        $scope.password = $scope.reg_pw1;
                        mydata.postLogin($scope.username, $scope.password, function (data) {
                            $scope.loggedIn = data;
                            $scope.registerVisible = false;
                            $scope.$apply();
                        });
                    }
                    else
                        alert("Registration failed!");
                });
            else
                alert("Passwords do not match!");
        else
            alert("Please fill in all data!");
    };

    // Auto Login if data in session
    if(sessionStorage.redditName && sessionStorage.redditPassword)
    	$scope.login();

});