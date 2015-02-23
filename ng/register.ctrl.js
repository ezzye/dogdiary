angular.module('app')
.controller('RegisterCtrl', function ($scope, UserSvc, $location) {
    $scope.register = function (username, password) {
        UserSvc.register(username, password)
        .then(function (user) {
        $scope.$emit('login', user)
        $location.path('/')
        })
    }
    
    $scope.updateDog = function (_id, username, dogname) {
        UserSvc.updateDog(_id, username, dogname)
    }
})