'use strict';

describe('Directive: pmXmlEditor', function () {

  // load the directive's module
  beforeEach(module('productionMapConsoleApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pm-xml-editor></pm-xml-editor>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the pmXmlEditor directive');
  }));
});
