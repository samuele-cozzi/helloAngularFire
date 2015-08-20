'use strict';

/**
 * @ngdoc function
 * @name helloAngularFire1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the helloAngularFire1App
 */
angular.module('helloAngularFire1App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
