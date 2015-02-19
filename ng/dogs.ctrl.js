angular.module('app')
.controller('DogsCtrl', function($scope,DogsSvc) {
    $scope.addDog = function () {
        if($scope.dogname) {
            DogsSvc.create({
                dogname: $scope.dogname,
                ownername: $scope.currentUser.username
            }).then(function ()
            {
                $scope.dogname=null
            })
        }
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