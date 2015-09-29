'use strict';

describe('Service: processes', function () {

  // load the service's module
  beforeEach(module('productionMapConsoleApp'));

  // instantiate service
  var processes;
  beforeEach(inject(function (_processes_) {
    processes = _processes_;
  }));

  it('should do something', function () {
    expect(!!processes).toBe(true);
  });

});
