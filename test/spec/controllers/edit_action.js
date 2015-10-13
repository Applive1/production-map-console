'use strict';

describe('Controller: EditActionCtrl', function () {

  // load the controller's module
  beforeEach(module('productionMapConsoleApp'));

  var EditActionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditActionCtrl = $controller('EditActionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditActionCtrl.awesomeThings.length).toBe(3);
  });
});
