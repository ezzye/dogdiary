angular.module('app')
.controller('PostsCtrl', function($scope,PostsSvc) {
    $scope.addPost = function () {
        if($scope.postBody) {
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