var services = angular.module('services',[]);
services.factory('commandCompiler',function(){
	var mapping = {
		'cute':cuteHandle,
		'zoon':function(value){return 'zoon';}
	};
	return {
		compile:function(commandObj){
			var chain = [];
			var cmd = '';
			angular.forEach(commandObj,function(value,key){
				if(cmd!=''){
					cmd += '/';
				}
				cmd += (mapping[key](value));
			});
			return cmd;
		}
	};
});

function cuteHandle(value){
	var cmd = [];
	if(angular.isDefined(value.width) && angular.isDefined(value.height)){
		cmd.push('w' + value.width);
		cmd.push('h' + value.height);
		if(angular.isDefined(value.pattern)){
			if(angular.isDefined(value.x) && angular.isDefined(value.y)){
				cmd.push(value.pattern + 'x' + value.x + 'y' + value.y);

			}
		}
	}
	if(cmd.length!=0){
		return 'c:' + cmd.join(',');
	}else{
		return '';
	}
};
