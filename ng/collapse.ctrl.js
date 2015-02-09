angular.module('app').controller('CollapseCtrl', function ($scope) {
  $scope.isCollapsed = false;
  $scope.$on('$viewContentLoaded', function(){
    $scope.isCollapsed =!$scope.isCollapsed;
  });
});