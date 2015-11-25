'use strict';

describe('Service: extractAndParse', function () {

  // load the service's module
  beforeEach(module('productionMapConsoleApp'));

  // instantiate service
  var extractAndParse;
  beforeEach(inject(function (_extractAndParse_) {
    extractAndParse = _extractAndParse_;
  }));

  it('should do something', function () {
    expect(!!extractAndParse).toBe(true);
  });

});
