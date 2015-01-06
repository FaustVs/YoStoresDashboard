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
	      { title: 'STORES HIGHLIGHTS', dashboard_filter: "storeshighlights"},
	      { title: 'FINANCE HIGHLIGHTS', dashboard_filter: "financehighlights"},
	      { title: 'SHOW ALL', dashboard_filter: ""}
	    ];

  });
