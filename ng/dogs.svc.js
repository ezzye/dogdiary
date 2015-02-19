angular.module('app')
.service('DogsSvc', function ($http) {
    this.fetch = function() {
        return $http.get('/api/dogs')
    }
    this.create = function (dog) {
        return $http.post('/api/dogs', dog)
    }
})