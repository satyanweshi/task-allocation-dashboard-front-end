angular.module('menuModule').
controller('menuController', ['$scope',function($scope){
	//variables to control the vertical and horizonatal navigation
	$scope.isChartsCollapse = true;
	$scope.isUIElementsCollapse = true;
	$scope.isMultiLevelDropDownCollapse = true;
	$scope.isMultiLevelThirdLevelCollapse = true;
	$scope.isSamplePagesCollapse = true;
	$scope.isMessagesCollapsed = true;
	$scope.isTaskCollapsed = true;
	$scope.isAlertCollapsed = true;
	$scope.isUserProfileCollapsed = true;
	//variables to control the vertical and horizonatal navigation
}])
.directive('menu', function(){
	return {
		templateUrl : 'menu/menu.template.html'
	};
});