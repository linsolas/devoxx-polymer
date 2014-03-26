'use strict';

angular.module('testMarvelApp').controller('MainCtrl', function ($scope, marvelService) {


    var ids = [1009521, 1011334, 1017100, 1009144, 1009146, 1016823,
               1009148, 1009149, 1011266, 1010354, 1010846, 1011297];

    $scope.team = [];
    $scope.heroes = [];
    for (var i = 0; i < ids.length; i++) {
    	var hero = marvelService.getHero(ids[i]);
    	$scope.heroes.push(hero);
    };
    console.dir($scope.heroes);

    var save = function(from) {
        console.log('Retrieving data from %s to %s...', from, from + 20);
        marvelService.findHeros().then(function(result) {
            console.log('Response received');
            console.dir(result);
            var heros = result.data.results;
            console.log('Heros have been retrieved (%s)', heros.length);
            for (var i = 0; i < heros.length; i++) {
                console.log(JSON.stringify(heros[i]));
                marvelService.saveInES(heros[i]);
            }
        });
    };


    $scope.saveHerosInElasticSearch = function() {
        console.log('Saving Heros...');
        for (var i = 0; i < 70; i++) {
            save(i * 20);
        }
        console.log('Heros saved!');
    }


    console.log('******* AFTER');

    $scope.hire = function(hero) {
        console.log('Hire hero %s', hero.id);
    	var index = $scope.heroes.indexOf(hero);
    	$scope.heroes.splice(index, 1);
    	$scope.team.push(hero);
    };
    $scope.fire = function(hero) {
    	var index = $scope.team.indexOf(hero);
    	$scope.team.splice(index, 1);
    	$scope.heroes.push(hero);
    };


});
