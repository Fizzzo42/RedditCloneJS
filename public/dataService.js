(function ($) {
    $.fn.dataService = {
        postLogin: function (name, password, callback) {
            $.post("/login", {"name": name, "password": password}).done(function (data) {
                callback(data);
            });
        },
        getLogin: function (callback) {
            $.getJSON("/login", {}, callback);
        },
        getEntries: function (callback) {
            console.log("Trying to get entries!");
            $.getJSON("/entries", {}, callback);
        },
        postEntry: function (title, url) {
            $.post("/entry", {"title": title, "url": url});
        },
        postrateUp: function (id) {
            $.post("/entry/" + id + "/up", {});
        },
        postrateDown: function (id) {
            $.post("/entry/" + id + "/down", {});
        }
    };
})(jQuery);
