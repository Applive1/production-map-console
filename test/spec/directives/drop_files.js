'use strict';

describe('Directive: dropFiles', function () {

  // load the directive's module
  beforeEach(module('productionMapConsoleApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<drop-files></drop-files>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dropFiles directive');
  }));
});
