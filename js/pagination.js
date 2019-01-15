var app = angular.module('pagination', ['ui.bootstrap']);

app.controller('Example', function($scope){
    $scope.lists = [
        1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,15
    ];
    $scope.totalItems = $scope.lists.length;
    $scope.currentPage = 1;
    $scope.numPerPage = 8;
    $scope.theActualDisplayList = [];

    $scope.$watch('currentPage', function(page) {
        if($scope.currentPage) {
            var spliceFrom = ($scope.currentPage - 1) * $scope.numPerPage;
            var offset = spliceFrom + $scope.numPerPage;
            $scope.theActualDisplayList = [];
            for (var i = spliceFrom; i < offset; i++) {
                if(i === $scope.lists.length) return false;
                $scope.theActualDisplayList.push($scope.lists[i]);
            }
        }
    });

});