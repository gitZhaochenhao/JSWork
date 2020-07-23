(function(w){
	w.transformCss = function(node, name, value) {
	if(!node.obj) {
		node.obj = {}
	}
	if(arguments.length > 2) {
		node.obj[name] = value;
		var result = '';
		for(var key in node.obj) {
			switch(key) {
				case 'translateX':
				case 'translateY':
				case 'translateZ':
				case 'translate':
					result += key + '(' + node.obj[key] + 'px) ';
					break;
				case 'rotateX':
				case 'rotateY':
				case 'rotateZ':
				case 'rotate':
				case 'skewX':
				case 'skewY':
				case 'skew':
					result += key + '(' + node.obj[key] + 'deg) ';
					break;
				case 'scaleX':
				case 'scaleY':
				case 'scale':
					result += key + '(' + node.obj[key] + ') ';
					break;
			}
		}
		node.style.transform = result;
	} else {
		result = 0;
		if(node.obj[name] == undefined) {
			//如果没有值，我们设置默认值
			if(name == 'scale' || name == 'scaleX' || name == 'scaleY') {
				result = 1;
			} else {
				result = 0;
			}
		} else {
			result = node.obj[name];
		}
		return result;
	}

}
})(window);


