angular.module('app')
.controller('DogsCtrl', function($scope,DogsSvc, $location) {
    $scope.addDog = function () {
            DogsSvc.create({
                dogname: $scope.dogname,
                ownername: $scope.currentUser.username
            }).then(function (dog)
            {
                $scope.$emit('addDog',dog)
                $scope.dogname=null
                $location.path('/')
            })
    }        

    $scope.$on('ws:new_dog', function (_, dog) {
        $scope.$apply(function () {
            $scope.dogs.unshift(dog)
        })
    })

    $scope.$on('addDog', function (_, dog) {
        $scope.currentDog = dog
        console.log("This is the dog",$scope.currentDog.dogname)
        console.log("This is the dog object", dog)
    })

    DogsSvc.fetch().success(function (dogs) {
        $scope.dogs = dogs
    })
    

})