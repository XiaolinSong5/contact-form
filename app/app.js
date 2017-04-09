(function (){

	angular
		.module('contactform', ['ngAnimate','ui.router','ngSanitize'])
		.config(appRouting);

	appRouting.$inject = ['$stateProvider', '$urlRouterProvider'];

	function appRouting ($stateProvider) {
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

	}

}());



