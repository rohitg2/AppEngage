//require configuration
require.config({
    baseUrl :  'app/',
	waitSeconds: 500,
    paths: {
        jquery: 'assets/js/jquery-1.11.1.min',
        moment: 'assets/js/moment.min',
        bootstrap: 'assets/js/bootstrap.min',
		sweetAlert: 'assets/js/sweetalert.min',
		angular: 'assets/js/angular.min',
       /* timeZone: 'assets/js/timezones.full'*/
       /*"angular-ui-router": '../assets/js/angular-ui-router.min'*/
    },
    shim: {
        "jquery":{
            exports:"$"
        },
        "angular": {
            exports : 'angular'
        },
        'bootstrap' : {
            deps : [ 'jquery' ]
        }
    }
});
require([ 'angular', 'jquery', 'bootstrap', 'sweetAlert'],
    function(angular) {
    require(['app'],
        function () {
        angular.bootstrap(document, ["AppEngage"]);
    });

});