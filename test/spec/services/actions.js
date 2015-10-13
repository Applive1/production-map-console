'use strict';

describe('Service: actions', function () {

  // load the service's module
  beforeEach(module('productionMapConsoleApp'));

  // instantiate service
  var actions;
  beforeEach(inject(function (_actions_) {
    actions = _actions_;
  }));

  it('should do something', function () {
    expect(!!actions).toBe(true);
  });

});
