angular.module('ui.bootstrap').controller('CollapseCtrl', function ($scope) {
  $scope.isCollapsed = false;
  $scope.$on('$viewContentLoaded', function(){
    $scope.isCollapsed =!$scope.isCollapsed;
  });
});