angular.module('app')
.controller('RegisterCtrl', function ($scope, UserSvc, $location) {
    $scope.register = function (username, dogname, password) {
        UserSvc.register(username, dogname, password)
        .then(function (user) {
        $scope.$emit('login', user)
        $location.path('/')
        })
    }
})