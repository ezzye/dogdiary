angular.module('app')
.controller('DogsCtrl', function($scope,DogsSvc, $location) {
    $scope.addDog = function () {
            DogsSvc.create({
                dogname: $scope.dogname,
                ownername: $scope.currentUser.username
            }).then(function (_, dog) {
                console.log('This is the scope .dogname', $scope.dogname)
                console.log('This is the scope .dog', $scope.dog)
                console.log('This is the scope .dogs', $scope.dogs)
                console.log('This is the scope .dog.dogname', $scope.dog.dogname)
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