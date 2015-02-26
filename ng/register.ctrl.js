angular.module('app')
.controller('RegisterCtrl', function ($scope, UserSvc, $location) {
    $scope.register = function (username, password) {
        UserSvc.register(username, password)
        .then(function (user) {
        console.log("This is user ctrl object", user)
        console.log("This is user ctrl object", user.username)
        console.log("This is user ctrl object", user.password)
        console.log("This is user ctrl object", user.dogname)    
        $scope.$emit('login', user)
        $location.path('/')
        })
    }
})