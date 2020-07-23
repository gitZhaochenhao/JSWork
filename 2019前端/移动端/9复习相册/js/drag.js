(function(w){
	w.contentDrag=function (navWrap,scrollAdd){
			var navList = navWrap.firstElementChild;
			var startY = 0;
			var eleY = 0;
			var s1 = 0;
			var s2 = 0;
			var t1 = 0;
			var t2 = 0;
			var startX=0;
			var isFlag=false;
			var Tween = {
				Linear: function(t,b,c,d){ return c*t/d + b; },
				easeOut: function(t,b,c,d,s){
				    if (s == undefined) s = 1.70158;
				    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
				}
			};
			var timer=null;
			
			// 按下
			navWrap.addEventListener('touchstart',function(event){
				var touch = event.changedTouches[0];
				navList.style.transition = 'none';
				eleY = transformCss(navList,'translateY');
				startY = touch.clientY;
				startX=touch.clientX;
				s1 = eleY;
				t1 = new Date().getTime();//毫秒  
				isFlag=false;
				
				// 关闭Tween定时器
				clearInterval(timer);
				if(scrollAdd && typeof scrollAdd['start'] == 'function'){
					scrollAdd['start']();
				};
			});
			// 移动
			navWrap.addEventListener('touchmove',function(event){
				var touch = event.changedTouches[0];
				var endY = touch.clientY;
				var endX=touch.clientX;
				var disY = endY - startY;
				var disX=endX-startX;
				
				//防抖
				var lastY = eleY + disY;
				if(isFlag){
					return;
				};
				
				if(Math.abs(disY)<Math.abs(disX)){
					if(!isFlag){
						isFlag=true;
					};
				};
				
				//临界值的橡皮筋效果，滑100走80  有一个阻尼系数，我们需要求一个阻尼系数来让100减到80 
				//这个系数必须是 0~1之间的一个小数，并且这个小数会越来越小，才能达到最终的极限；
				// if(lastY > 0){
				// 	// 1-目标区域/总区域
				// 	var scale = 0.6 - lastY / (3*navWrap.offsetHeight);
				// 	lastY = lastY * scale;
				// }else if(lastY < navWrap.offsetHeight - navList.offsetHeight){
				// 	var temp = Math.abs(lastY) - Math.abs(navWrap.offsetHeight- navList.offsetHeight);
				// 	var scale = 0.6 - temp / (3*navWrap.offsetHeight);
				// 	temp = temp * scale;
				// 	lastY = navWrap.offsetHeight - navList.offsetHeight - temp;
				// }
				
				transformCss(navList,'translateY',lastY);
				if(scrollAdd && typeof scrollAdd['move'] == 'function'){
					scrollAdd['move']();
				};

				
			});
			
			navWrap.addEventListener('touchend',function(event){
				var touch = event.changedTouches[0];
				//加速
				s2 = transformCss(navList,'translateY');//这个位置和move当中最终设置的位置是重合的;
				t2 = new Date().getTime();
				var speed = (s2 - s1) / (t2 - t1);
				var lastY = s2 + speed * 100;
				// 总时长，配合d使用
				var timeAll=1;
				var type='Linear';
				
				//回弹
				// var bezier = '';
				// if(lastY > 0){
				// 	lastY = 0;
				// 	bezier = 'cubic-bezier(.13,.67,.71,1.79)';
				// }else if(lastY < navWrap.offsetHeight - navList.offsetHeight){
				// 	lastY = navWrap.offsetHeight - navList.offsetHeight;
				// 	bezier = 'cubic-bezier(.13,.67,.71,1.79)';
				// }
				// navList.style.transition = '1s '+bezier;
				
				// 参数:
				// t: current time（当前是移动的第几步,要注意的是t是从0开始的，设置步长时必须确定t确实能到达d，如果上面的步长是3，,
				// 那么t就永远都到不了d了。更好的处理是当t等于或超过d之后，就停止定时器并设置当前值为目标值。);
				// b: beginning value（初始值,初始位置）；
				// c: change in value（变化量,要移动多远）；
				// d: duration（一共多少步,动多少次,与总时长配合使用 总时长/单次时长）；
				
				// 不同的位置利用不同的函数
				if(lastY>0){
					// 最后应当在的地方
					lastY=0;
					type='easeOut';
				}else if(lastY<navWrap.offsetHeight-navList.offsetHeight){
					// 最后应当在的地方
					lastY=navWrap.offsetHeight-navList.offsetHeight;
					type='easeOut';
				};
				
				TweenMove(lastY,navList,type);
				scrollAdd['endTrue'](timer);	
				function TweenMove(lastY,navList,type){
					var t = 0;
					var b = transformCss(navList,'translateY');
					// 惯性的距离 总距离-滑动距离
					var c = lastY - b;
					var d= timeAll/0.02;
					
					timer=setInterval(function(){
						//回弹到目标位置
						if(t>=d){
							clearInterval(timer);
							if(scrollAdd && typeof scrollAdd['end'] == 'function'){
								scrollAdd['end']();
							};
						};
						t++;
						console.log(type);
						var lastY=Tween[type](t,b,c,d);
						transformCss(navList,'translateY',lastY);
					},20);
					
				};
			});
		}
})(window);
