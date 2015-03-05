angular.module('app')
.controller('ApplicationCtrl', function ($scope) {
    $scope.$on('login', function (_, user) {
        $scope.currentUser = user
    })
    
    $scope.$on('addDog', function () {
        $scope.currentDog = $scope.dogname
        console.log("This is the current dog",$scope.currentDog)
    })
})