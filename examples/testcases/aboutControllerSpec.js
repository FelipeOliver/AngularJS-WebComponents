describe("About Controller", function () {

	var controller, scope;
	beforeEach(angular.mock.module('routeApp'));

	beforeEach(angular.mock.inject(function($rootScope, $controller) {
	    // The injector unwraps the underscores (_) from around the parameter names when matching
	    scope = $rootScope.$new();
	    controller = $controller('aboutController', { $scope : scope });
	}));

	it('Message should be defined', inject(function ($rootScope, $controller) {
	  	expect(scope.message).toBeDefined();
	}));
	
	it('Message should be equal to ', inject(function ($rootScope, $controller) {
		expect(scope.message).toEqual('Hello aboutController.');
	}));
	
	it('Teste de validação de função', inject(function ($rootScope, $controller) {
		expect(scope.testFunction).toBeDefined();
		expect(scope.testFunction(2, 2)).toBe(4);
	}));
});