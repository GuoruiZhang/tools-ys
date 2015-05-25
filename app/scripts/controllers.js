var controllers = angular.module('controllers', ['ui.router','services']);

controllers.controller('command', function($scope,$http,commandCompiler) {
	$scope.url = {};
	$scope.url.imageURL = 'http://demo.rs.top1cloud.com/example.jpg';
	$scope.url.targetURL = $scope.url.imageURL;
	$scope.command = {};
	$scope.$watch('command',function(nv,ov){
		if(nv===ov){return;}
		var imageURL = $scope.url.imageURL.split('?')[0];
		var command = commandCompiler.compile($scope.command);
		if(command==''){
			$scope.url.imageURL = imageURL;
		}else{
			$scope.url.imageURL = imageURL + '?access=' + command;
		}
	},true);

	$scope.invoke = function(){
		$scope.url.targetURL = $scope.url.imageURL;
	};

	$scope.cleanIt = function(cmdName){
		delete $scope.command[cmdName];
	};

	$scope.cleanAll = function(){
		$scope.command = {};
	};

	$scope.upload = {};
	$scope.getToken = function(){
		$http.jsonp('http://api.top1cloud.com/getuploadtoken?SafeCode=' + $scope.upload.safeCode + '&callback=JSON_CALLBACK')
		.success(function(data,status){
			$scope.upload.token = data.message;
		})
		.error(function(data){
			alert("错误："+data);
		});
	};

});
