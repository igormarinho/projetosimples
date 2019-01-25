var app = angular.module("app", ["ngRoute"]);
app.config(['$routeProvider', function ($routeProvider) {
	        $routeProvider.when('/inicial', {templateUrl: 'template/inicial.html'});
	        $routeProvider.when('/pagina1', {templateUrl: 'template/pagina1.html' });
	        $routeProvider.when('/pagina2', {templateUrl: 'template/pagina2.html'});
            $routeProvider.when('/pagina3', {templateUrl: 'template/pagina3.html'});
			$routeProvider.when('/pagina4', {templateUrl: 'template/pagina4.html'});
			$routeProvider.when('/pagina5', {templateUrl: 'template/pagina5.html'});
			$routeProvider.when('/unidade1', {templateUrl: 'template/pagina6.html'});
			$routeProvider.when('/certificado',{templateUrl: 'template/pagina7.html'});
	        $routeProvider.otherwise({redirectTo: 'inicial'});
	    }]);

