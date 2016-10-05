angular.module('kpi.numViolation')
.controller('kpiNumViolationSummaryController', ['$scope', function($scope){
	$scope.TESTER = document.getElementById('tester');
	Plotly.plot( $scope.TESTER, [{
	x: [1, 2, 3, 4, 5],
	y: [1, 2, 4, 8, 16] }], {
	margin: { t: 0 } } );
}])
.directive('kpiNumViolationSummary', function(){
	return{
		templateUrl : 'kpi/numViolation/numViolation-summary-directive.html'
	};
});