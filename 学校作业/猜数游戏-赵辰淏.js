var num=Math.ceil(Math.random()*100);
var x=0;
var out='';
// alert(num)
for (var i = 0; i < 1; i--) {
	// 字符串类型的数据
var value=prompt('请输入您要猜的数字');
	if(value%1 !=0 ){
		alert('请输入一个整数');
		continue;
	}else{
		x++;
		if(parseInt(value)===num){
			out='恭喜你，答对了！答案就是'+num+',共用了'+x+'次猜对';
			alert(out);
			break;
		}else{
			out=value>num?'猜大了，尝试小一点的数吧':'猜小了，尝试大一点的数吧';
			alert(out);
		};
	};
};