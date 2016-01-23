function navController($scope, $location){
  'use strict';
  $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
  };
}
