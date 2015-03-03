angular.module('app')
.controller('ApplicationCtrl', function ($scope) {
    $scope.$on('login', function (_, user) {
        $scope.currentUser = user
    })
    
    $scope.$on('addDog', function (_, dog) {
        $scope.currentDog = dog
        console.log("This is the dog",$scope.currentDog.dogname)
        console.log("This is the dog object", dog)
    })
})