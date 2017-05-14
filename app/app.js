(function (){

	angular
		.module('contactform', ['ngAnimate','ui.router','ngSanitize', 'anwbServices', 'anwbFactories'])
		.config(appRouting);

	appRouting.$inject = ['$stateProvider', '$urlRouterProvider'];

	
    function appRouting ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('step0', {
                url: '/onderwerp0',
                templateUrl: 'step0.html',
                controller: 'FormCtrl'
            })
            .state('step1', {
                url: '/onderwerp',
                templateUrl: 'step1.html',
                controller: 'FormCtrl'
            })
            .state('step2', {
                url: '/uw-gegevens',
                templateUrl: 'step2.html',
                controller: 'FormCtrl'
            });

        $urlRouterProvider.otherwise('/onderwerp');

    }

}());



