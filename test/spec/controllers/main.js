'use strict';

describe('Controller: ToolbarController', function () {

  // load the controller's module
  beforeEach(module('yoStoresDashboardApp'));

  var ToolbarController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ToolbarController = $controller('ToolbarController', {
      $scope: scope
    });
  }));

  it('should attach a list of tabs (length of 3) to the scope', function () {
    expect(scope.tabs.length).toBe(3);
  });

  it('should have at least one populated tab', function () {
    expect(scope.tabs[0].title).toBeDefined();
    expect(scope.tabs[0].dashboardFilter).toBeDefined();
  });

  it('should have the tab item "SHOW ALL" as the title of the last item in the scoped tab list', function () {
    expect(scope.tabs[scope.tabs.length-1].title).toBe('SHOW ALL');
  });

  it('should have the tab item "SHOW ALL" as having no filter criteria set', function () {
    expect(scope.tabs[scope.tabs.length-1].dashboardFilter).toBe('');
  });
});
