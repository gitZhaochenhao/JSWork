/*
* 在浏览器端，window是全局变量对象
* 浏览器中的js分为：BOM（window中的方法）,DOM(对DOM元素的增删改查),es规范构成
* 在服务器端，global是全局变量
* 服务端中的js由绝大部分的es规范与global(取代了浏览器中的window)构成
* */
console.log(global);