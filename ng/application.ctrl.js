angular.module('app')
.controller('ApplicationCtrl', function ($scope) {
    $scope.$on('login', function (_, user) {
        $scope.currentUser = user;
    })
    
    $scope.$on('dogadded', function (_, dog) {
        $scope.currentDog = dog;
    })
    console.log(user)
    console.log(dog)

})