(function (){

    angular
        .module('contactform', ['ngAnimate','ui.router','ngSanitize'])
		.config(appRouting);

	appRouting.$inject = ['$stateProvider', '$urlRouterProvider'];

	function appRouting ($stateProvider, $urlRouterProvider) {
		// $stateProvider
		// 	.state('step1', {
		// 		url: '/onderwerp',
		// 		templateUrl: apigeeConfig.api_urls.path + 'templates/step1.html',
		// 		controller: 'FormCtrl'
		// 	})
		// 	.state('step2', {
		// 		url: '/uw-gegevens',
		// 		templateUrl: apigeeConfig.api_urls.path + 'templates/step2.html',
		// 		controller: 'FormCtrl'
		// 	})
		// 	.state('bedankt', {
		// 		url: '/bedankt',
		// 		templateUrl: apigeeConfig.api_urls.path + 'templates/thanks.html',
		// 		controller: 'FormCtrl'
		// 	})
		// 	.state('error', {
		// 		url: '/error',
		// 		templateUrl: apigeeConfig.api_urls.path + 'templates/error.html',
		// 		controller: 'FormCtrl'
		// 	});
        //
		// $urlRouterProvider.otherwise('/onderwerp');

	}

}());



