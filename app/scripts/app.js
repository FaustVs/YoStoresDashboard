'use strict';

/**
 * @ngdoc overview
 * @name yoStoresDashboardApp
 * @description
 * # yoStoresDashboardApp
 *
 * Main module of the application.
 */
angular
  .module('yoStoresDashboardApp', [
    'ngCookies',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'firebase',
    'highcharts-ng'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/tile_view.html',
        controller: 'ToolbarController'
      })
      //.when('/about', {
      //  templateUrl: 'views/tile_view.html',
      //  controller: 'ToolbarController'
      //})
      .otherwise({
        redirectTo: '/'
      });
  });
