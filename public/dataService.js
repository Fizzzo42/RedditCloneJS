(function ($) {

    var socket = io.connect('http://localhost:4730/');

    $.fn.dataService = {
        postLogin: function (name, password, callback) {
            $.post("/login", {"name": name, "password": password}).done(function (data) {
                callback(data);
                if(data){
                    sessionStorage.redditName = name;
                    sessionStorage.redditPassword = password;
                }

            });
        },
        getLogin: function (callback) {
            $.getJSON("/login", {}, callback);
        },
        getEntries: function (callback) {
            $.getJSON("/entries", {}, callback);
        },
        postEntry: function (title, url) {
            if(url.indexOf("http") === -1)
                url = "http://" + url;
            $.post("/entry", {"title": title, "url": url});
        },
        postrateUp: function (id) {
            $.post("/entry/" + id + "/up", {});
        },
        postrateDown: function (id) {
            $.post("/entry/" + id + "/down", {});
        },
        postLogout: function (callback) {
            $.post("/logout", {}, callback);
        },
        refreshEntries: function(data){
            var $scope = angular.element($('#content')).scope();
            $scope.$apply(function() {
                data.sort(function(entryA, entryB){return entryB.rating.value-entryA.rating.value});
                $scope.entries = data;
            });
        },
        refreshEntry: function(data){
            var $scope = angular.element($('#posts')).scope();
            $scope.$apply(function() {
                $scope.entry = data;
            });
        },
        getEntryById: function(id, callback){
            $.getJSON("/entry/" + id, {}, callback);
        },
        commentRateUp: function(id){
            $.post("/comment/" + id + "/up", {});
        },
        commentRateDown: function(id){
            $.post("/comment/" + id + "/down", {});
        },
        postCommentOnEntry: function(id, text){
            $.post("/entry/" + id + "/comment", {"text":text});
        },
        postRegister: function (name, password, callback){
            $.post("/register", {"name":name, "password":password}, callback);
        },
        getSocket: function(){
            return socket;
        }
    };
})(jQuery);
