angular.module('app')
.controller('DogsCtrl', function($scope,DogsSvc, $location) {
    $scope.addDog = function () {
            DogsSvc.create({
                dogname: $scope.dogname,
                ownername: $scope.currentUser.username
            }).then(function (_, dog) {
                $scope.emit('dogcreate',$scope.dogname)
                $location.path('/')
            })
    }        

    $scope.$on('ws:new_dog', function (_, dog) {
        $scope.$apply(function () {
            $scope.dogs.unshift(dog)
        })
    })

    DogsSvc.fetch().success(function (dogs) {
        $scope.dogs = dogs
    })
    

})