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

(0, _moudles.bar)();
console.log(_moudles2.obj1.name);
console.log(_moudles2.obj2.name);
console.log(_moudles4.default.name);
_moudles4.default.setName('天天');
console.log(_moudles4.default.name);