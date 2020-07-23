//接收暴露的对象信息

//接收统一暴露与分别暴露时的接收方式
import {foo,bar} from './moudles1'
import {obj1,obj2} from './moudles2'
//默认暴露的接收方式
import moudles3 from "./moudles3";
//引入第三方库
// import $ from jQuery
// $('body').css({backgroundColor,'blue'})
foo()
bar()
console.log(obj1.name)
console.log(obj2.name)
console.log(moudles3.name)
moudles3.setName('天天')
console.log(moudles3.name)