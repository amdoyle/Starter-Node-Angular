angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

  // nerds
		.when('/nerds', {
			templateUrl: 'views/nerd.html',
			controller: 'NerdController'
		});

	$locationProvider.html5Mode(true);

}]);
