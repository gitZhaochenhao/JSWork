(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//接收模块,汇总模块
let moudles1 =require('./modules/modules1');
let moudles2 =require('./modules/modules2');
let moudles3 =require('./modules/modules3');
moudles1.foo();
moudles2();
/*
* modulse.exports 与 exports 的关系式 ：
* 默认情况下：二者都指向一个空对象
* 当我们要用modulse.exports暴露对象时，modulse.exports会改变指向，并将指向的对象暴露出去
* exports不会改变指向，而是，动态的向这个空对象添加属性与方法，最后将该对象暴露出去
* */
console.log(moudles3.stuArr);

},{"./modules/modules1":2,"./modules/modules2":3,"./modules/modules3":4}],2:[function(require,module,exports){
//暴露出去一个对象
let obj = {
    name:'Tom',
    foo(){
        console.log(`模块一中的foo函数${this.name}`)
    },
    bar() {
        console.log(`模块一中的bar函数${this.name}`)
    }
}

module.exports = obj;
},{}],3:[function(require,module,exports){
module.exports = function () {
    console.log('模块2暴露的函数')
}
},{}],4:[function(require,module,exports){
exports.stuArr = [{name:'小明',age:23}]
exports.schoolArr = [{name:'哈否',age:66}]
//模块3暴露的数组
},{}]},{},[1]);
