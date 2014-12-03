﻿(function ($) {

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
            //var $scope = angular.element('$0').scope();
            $scope.$apply(function() {
                $scope.entries = data;
            });
        },
        getSocket: function(){
            return socket;
        }
    };
})(jQuery);
