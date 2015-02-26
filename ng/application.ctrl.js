angular.module('app')
.controller('ApplicationCtrl', function ($scope) {
    $scope.$on('login', function (_, user) {
        $scope.currentUser = user
    })
    $scope.$on('addDog', function (_, dog) {
        $scope.currentDog = dog
        console.log("This is me emitting dog")
        console.log($scope.currentDog)
        console.log($scope.currentDog.ownername)
        console.log($scope.currentDog.dogname)
    })
})