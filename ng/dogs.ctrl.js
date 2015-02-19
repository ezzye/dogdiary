angular.module('app')
.controller('DogsCtrl', function($scope,DogsSvc) {
    $scope.addDog = function () {
        if($scope.dogs) {
            PostsSvc.create({
                body: $scope.postBody,
                dogname: $scope.currentUser.dogname
            }).then(function ()
            {
                $scope.postBody=null
            })
        }
    }

    $scope.$on('ws:new_post', function (_, post) {
        $scope.$apply(function () {
            $scope.posts.unshift(post)
        })
    })

    PostsSvc.fetch().success(function (posts) {
        $scope.posts = posts
    })
    

})