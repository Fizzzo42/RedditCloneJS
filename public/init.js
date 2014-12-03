(function ($) {
    $.support.cors = true;
    //TODO create db service
    window.mydata = $.fn.dataService;  //exist till the site is changed
    window.myview = $.fn.viewService;
    //sessionStorage.dataService = $.fn.DataService();  //stores data for one session
    //localStorage.dataService = $.fn.DataService();  //stores data with no expiration date
    
    $.ajaxSetup({
        cache: false
    });

})(jQuery);
