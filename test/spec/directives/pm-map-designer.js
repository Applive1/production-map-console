'use strict';

describe('Directive: pmMapDesigner', function () {

  // load the directive's module
  beforeEach(module('productionMapConsoleApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pm-map-designer></pm-map-designer>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the pmMapDesigner directive');
  }));
});
