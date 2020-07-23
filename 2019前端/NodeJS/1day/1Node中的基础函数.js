//在node中，所有的代码其实都被包裹现在一个我们不可见的函数中
//function (exports, require, module, __filename, __dirname)
//exports, require, module，正是因为有了这3个参数的存在才使得我们可以进行commentJs的模块化编写
//__filename, __dirname，nodejs是服务端语言，要求拥有必备的文件操作能力，这两个属性便是文件相关属性

/*
* D:\python_work\js\new\2019前端\NodeJS\1day\1Node中的基础函数.js
D:\python_work\js\new\2019前端\NodeJS\1day
* */
console.log(__filename)
console.log(__dirname)

//arguments实参列表中有一个方法可以获取包裹该代码的函数体
// console.log(arguments.callee.toString());

//该函数存在的意义便是，为了保证后端代码的安全性以及模块化的使用