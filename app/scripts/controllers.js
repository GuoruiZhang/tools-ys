var controllers = angular.module('controllers', ['ui.router','services']);

controllers.controller('command', function($scope,commandCompiler) {
	$scope.imageURL = 'http://demo.rs.top1cloud.com/example.jpg';
	$scope.targetURL = $scope.imageURL;
	$scope.command = {};
	$scope.$watch('command',function(nv,ov){
		if(nv===ov){return;}
		var imageURL = $scope.imageURL.split('?')[0];
		var command = commandCompiler.compile($scope.command);
		if(command!=''){
			$scope.imageURL = imageURL + '?access=' + command;
		}
	},true);

	$scope.invoke = function(){
		$scope.targetURL = $scope.imageURL;
	}
});
