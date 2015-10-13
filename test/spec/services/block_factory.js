'use strict';

describe('Service: blockFactory', function () {

  // load the service's module
  beforeEach(module('productionMapConsoleApp'));

  // instantiate service
  var blockFactory;
  beforeEach(inject(function (_blockFactory_) {
    blockFactory = _blockFactory_;
  }));

  it('should do something', function () {
    expect(!!blockFactory).toBe(true);
  });

});
