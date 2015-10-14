'use strict';

describe('Controller: PmblocksCtrl', function () {

  // load the controller's module
  beforeEach(module('productionMapConsoleApp'));

  var PmblocksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PmblocksCtrl = $controller('PmblocksCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PmblocksCtrl.awesomeThings.length).toBe(3);
  });
});
