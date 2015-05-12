var services = angular.module('services',[]);
services.factory('commandCompiler',function(){
	var mapping = {
		'cute':cuteHandle,
		'zoom':zoomHandle,
		'mask':maskHandle,
		'format':formatHandle
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
}

function zoomHandle(value){
	var cmd = [];
	if(angular.isDefined(value.pattern)){
		cmd.push(value.pattern);
	}
	if(angular.isDefined(value.width)){
		cmd.push('w' + value.width);
	}
	if(angular.isDefined(value.height)){
		cmd.push('h' + value.height);
	}
	if(cmd.length!=0){
		return 't:' + cmd.join(',');
	}else{
		return '';
	}
}

function maskHandle(value){
	var cmd = [];
	if(angular.isDefined(value.text)){
		cmd.push('text~' + new Base64().encode(value.text));
	}
	if(angular.isDefined(value.img)){
		cmd.push('img~' + new Base64().encode(value.img));
	}
	if(angular.isDefined(value.font)){
		cmd.push('f~' + value.font);
	}
	if(angular.isDefined(value.fontSize)){
		cmd.push('s' + value.fontSize);
	}
	if(angular.isDefined(value.fontColor)){
		cmd.push('c~' + value.fontColor);
	}
	if(angular.isDefined(value.alpha)){
		cmd.push('a~' + value.alpha);
	}
	if(angular.isDefined(value.pattern)){
		if(angular.isDefined(value.x) && angular.isDefined(value.y)){
			cmd.push(value.pattern + 'x' + value.x + 'y' + value.y);
		}
	}
	if(cmd.length!=0){
		return 'm:' + cmd.join(',');
	}else{
		return '';
	}
}

function formatHandle(value){
	var cmd = [];
	if(angular.isDefined(value.quality)){
		cmd.push(value.quality);
	}
	if(angular.isDefined(value.type)){
		cmd.push(value.type);
	}
	if(angular.isDefined(value.stepBystep) && value.stepBystep === true){
		cmd.push('*');
	}
	if(cmd.length!=0){
		return 'f:' + cmd.join('');
	}else{
		return '';
	}
}