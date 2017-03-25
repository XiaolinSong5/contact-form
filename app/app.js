(function (){
	var app = angular.module("contactform", ["ngRoute"]);
	app.config(function($routeProvider) {
		$routeProvider
			.when("/onderwerp", {
				templateUrl : "step1.html",
				controller : "FormCtrl"
			});
	});
	

}());



