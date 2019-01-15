var app = angular.module("app", ["ngRoute"]);
app.config(['$routeProvider', function ($routeProvider) {
	        $routeProvider.when('/inicial', {templateUrl: 'paginas/inicial.html'});
	        $routeProvider.when('/pagina1', {templateUrl: 'paginas/pagina1.html' });
	        $routeProvider.when('/pagina2', {templateUrl: 'paginas/pagina2.html'});
            $routeProvider.when('/pagina3', {templateUrl: 'paginas/pagina3.html'});
			$routeProvider.when('/pagina4', {templateUrl: 'paginas/pagina4.html'});
			$routeProvider.when('/pagina5', {templateUrl: 'paginas/pagina5.html'});
			$routeProvider.when('/unidade1', {templateUrl: 'paginas/unidade1.html'});
			$routeProvider.when('/certificado',{templateUrl: 'paginas/certificado.html'});
	        $routeProvider.otherwise({redirectTo: 'inicial'});
	    }]);

