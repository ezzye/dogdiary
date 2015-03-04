angular.module('app')
.controller('DogsCtrl', function($scope,DogsSvc, $location) {
    $scope.addDog = function () {
            DogsSvc.create({
                dogname: $scope.dogname,
                ownername: $scope.currentUser.username
            }).then(function ($scope.dogname) {
                console.log("This is the scope dogs name",$scope.dogname)
                console.log("This is the dogs object",dogname)
                console.log("This is the object  dogs name",dog.body.dogname)
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