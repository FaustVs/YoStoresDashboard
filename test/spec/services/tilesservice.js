'use strict';

describe('Service: TilesService', function () {

  // load the service's module
  beforeEach(module('yoStoresDashboardApp'));

  // instantiate service
  var TilesService;
  beforeEach(inject(function (_TilesService_) {
    TilesService = _TilesService_;
  }));

  it('should do something', function () {
    expect(!!TilesService).toBe(true);
  });

});
