/*
 扩展jQuery的工具方法 : $.extend(object)
   min(a, b) : 返回较小的值
   max(c, d) : 返回较大的值
   leftTrim() : 去掉字符串左边的空格
   rightTrim() : 去掉字符串右边的空格
 */

//正则
/*
 ^   匹配字符串开始
 \s  匹配空格
 +   匹配一次或者多次
 $   匹配字符串的末尾
 */
//扩展$ 
$.extend({
  min:function(){
	// arguments对象:可以获得函数的所有参数,并以数组方式储存在arguments中
	var min=arguments[0]
	for(var i=0;i<arguments.length;i++){
		if(min>arguments[i]){
			min=arguments[i]
		}
	}
	return min
  },
  max:function(){
	  // arguments对象:可以获得函数的所有参数,并以数组方式储存在arguments中
	  var maxs=arguments[0]
	  for(var i=0;i<arguments.length;i++){
	  	if(maxs<arguments[i]){
	  		maxs=arguments[i]
	  	}
	  }
	  return maxs
  },
  leftTrim:function(str){
	  return str.replace(/^\s+/,'');
  },
  rightTrim:function(str){
	  return str.replace(/\s+$/,'')
  },
  adds:function(){
	  var sum=0;
	  for (var i = 0; i < arguments.length; i++) {
	  	sum+=arguments[i]
	  };
	  return sum
  }
})


//扩展 $('#id').XXXXX
//$.fn.extend(object)
// checkAll() : 全选
// unCheckAll() : 全不选
// reverseCheck() : 全反选
$.fn.extend({
	checkAll:function(){
		// 当我们对一个对象使用方法时，方法内部的this就指向该对象不管对象是dom还是jq
		this.prop('checked',true)
	},
	unCheckAll:function(){
		this.prop('checked',false)
	},
	reverseCheck:function(){
		this.each(function(){
			// 此时each循环，单位元素为dom对象
			this.checked=!this.checked
		})
	}
})





