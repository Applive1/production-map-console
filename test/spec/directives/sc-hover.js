'use strict';

describe('Directive: scHover', function () {

  // load the directive's module
  beforeEach(module('productionMapConsoleApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sc-hover></sc-hover>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the scHover directive');
  }));
});
