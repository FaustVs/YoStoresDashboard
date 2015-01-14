'use strict';

/**
 * @ngdoc service
 * @name yoStoresDashboardApp.TilesService
 * @description
 * # TilesService
 * Factory in the yoStoresDashboardApp.
 */
angular.module('yoStoresDashboardApp')
  .constant('FIREBASE_URL', 'https://storesdashboardtest.firebaseio.com/')
  .factory('Tiles', function ($firebase, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL);
    var tiles = $firebase(ref.child('tiles')).$asArray();

    var Tiles = {
        all: tiles
      };
      return Tiles;
  });
