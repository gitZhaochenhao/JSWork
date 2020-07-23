//接收模块,汇总模块
let moudles1 =require('./modules/modules1');
let moudles2 =require('./modules/modules2');
let moudles3 =require('./modules/modules3');
//接受第三方库，可以直接输入库名称
let uniq = require('uniq');
let reset = uniq([1,2,3,567,4,21,5,7,8,3]);
console.log(reset)
moudles1.foo();
moudles2();
/*
* modulse.exports 与 exports 的关系式 ：
* 默认情况下：二者都指向一个空对象
* 当我们要用modulse.exports暴露对象时，modulse.exports会改变指向，并将指向的对象暴露出去
* exports不会改变指向，而是，动态的向这个空对象添加属性与方法，最后将该对象暴露出去
* */
console.log(moudles3.stuArr);
