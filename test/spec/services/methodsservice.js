'use strict';

describe('Service: methodsService', function () {

  // load the service's module
  beforeEach(module('productionMapConsoleApp'));

  // instantiate service
  var methodsService;
  beforeEach(inject(function (_methodsService_) {
    methodsService = _methodsService_;
  }));

  it('should do something', function () {
    expect(!!methodsService).toBe(true);
  });

});
