'use strict';

angular.module('testMarvelApp').controller('MainCtrl', function ($scope, marvelService) {


    console.log('******* BEFORE');

    var ids = [1009521, 1011334, 1017100, 1009144, 1009146, 1016823,
               1009148, 1009149, 1011266, 1010354, 1010846, 1011297];

    $scope.team = [];
    $scope.heros = [];
    for (var i = 0; i < ids.length; i++) {
    	var hero = marvelService.getHero(ids[i]);
    	console.dir(hero);
    	$scope.heros.push(hero);
    };

    console.log('******* AFTER');

    $scope.hire = function(hero) {
    	var index = $scope.heros.indexOf(hero);
    	$scope.heros.splice(index, 1);
    	$scope.team.push(hero);
    };
    $scope.fire = function(hero) {
    	var index = $scope.team.indexOf(hero);
    	$scope.team.splice(index, 1);
    	$scope.heros.push(hero);
    };


});
