'use strict';

/**
 * @ngdoc function
 * @name yoStoresDashboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoStoresDashboardApp
 */
angular.module('yoStoresDashboardApp')
  .controller('ToolbarController', function ($scope) {
    $scope.tabs = [
	      { title: 'STORES HIGHLIGHTS', dashboardFilter: "storeshighlights"},
	      { title: 'FINANCE HIGHLIGHTS', dashboardFilter: "financehighlights"},
	      { title: 'SHOW ALL', dashboardFilter: ""}
	    ];
  });
