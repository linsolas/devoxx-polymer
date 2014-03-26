'use strict';

angular.module('testMarvelApp').factory('marvelService', function($http, $q) {

    var MARVEL_SERVER = 'http://gateway.marvel.com/v1/public/';
    var ES_SERVER = 'http://localhost:9200/';
    var API_KEY = 'apikey=52ee0500e06b3f33ae51bf0a8922100b';

    var findHeros = function() {
        console.log('------ List Heros');
        var def = $q.defer();
        var url = MARVEL_SERVER + 'characters?limit=20&' + API_KEY;
        $http.get(url).success(def.resolve).error(def.reject);
        return def.promise;
    }

    var getHero = function(id) {
        return JSON.parse(localStorage.getItem('hero.' + id));
    };

    var saveHero = function(id, hero) {
        localStorage.setItem('hero.' + id, JSON.stringify(hero));
    };

    var saveInES = function(hero) {
        console.log('Going to put Hero %s (%s) in ES', hero.name, hero.id);
        $http.post('http://localhost:9200/devoxx/marvel', hero).then(function(result) {
            console.log('DONE');
        });
    };


    return {

        findHeros: findHeros,
        getHero: getHero,
        saveHero: saveHero,
        saveInES : saveInES

    };

});
