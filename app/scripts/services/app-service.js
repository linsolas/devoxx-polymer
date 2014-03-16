'use strict';

angular.module('testMarvelApp').factory('marvelService', function($http, $q) {

    var MARVEL_SERVER = 'http://gateway.marvel.com/v1/public/';
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


    return {

        findHeros: findHeros,
        getHero: getHero,
        saveHero: saveHero

    };

});
