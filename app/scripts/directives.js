var directives = angular.module('directives',[]);
directives.directive('colorpicker',function(){
	return {
		restrict: 'A',
		link:function(scope,element,attrs){
			angular.element(element).farbtastic(function(color){
				scope.command.mask.fontColor = color.replace(/\#/,'');
				scope.$apply();		
			});
		}
	};
});
