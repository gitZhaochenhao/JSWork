(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _moudles = require('./moudles1');

var _moudles2 = require('./moudles2');

var _moudles3 = require('./moudles3');

var _moudles4 = _interopRequireDefault(_moudles3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// (0, _moudles.foo)();
//默认暴露的接收方式
//接收暴露的对象信息

//接收统一暴露与分别暴露时的接收方式

// (0, _moudles.bar)();
console.log(_moudles2.obj1.name);
console.log(_moudles2.obj2.name);
console.log(_moudles4.default.name);
_moudles4.default.setName('天天');
console.log(_moudles4.default.name);
},{"./moudles1":2,"./moudles2":3,"./moudles3":4}],2:[function(require,module,exports){
"use strict";

/*
* 分别暴露
* export ~~~
* */

function foo() {
    console.log("\u8FD9\u91CC\u662F\u4F7F\u7528\u5206\u522B\u66B4\u9732\u900F\u9732\u7684foo\u51FD\u6570");
}
function bar() {
    console.log("\u8FD9\u91CC\u662F\u4F7F\u7528\u5206\u522B\u66B4\u9732\u900F\u9732\u7684bar\u51FD\u6570");
}

bar()
        foo()
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
* export{.....}
* 统一暴露
*/

var obj1 = { name: 'kobe', age: 43 };
var obj2 = { name: 'wade', age: 41 };

exports.obj1 = obj1;
exports.obj2 = obj2;
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
* 默认暴露
* export default ~~
* */

exports.default = {
    name: '小明',
    setName: function setName(name) {
        this.name = name;
    }
};
},{}]},{},[1]);
