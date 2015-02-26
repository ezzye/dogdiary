angular.module('app')
.controller('DogsCtrl', function($scope,DogsSvc, $location) {
    $scope.addDog = function () {
            DogsSvc.create({
                dogname: $scope.dogname,
                ownername: $scope.currentUser.username
            }).then(function (dog)
            {
                console.log("This is dog ctrl object", dog)
                console.log("This is dog ctrl object", dog.ownername)
                console.log("This is dog ctrl object", dog.dogname)
                $scope.$emit('addDog', dog)
                $scope.dogname=null
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