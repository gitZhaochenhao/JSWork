function Fb(num) {
    return num>2?Fb(num-1)+Fb(num-2) :1
};

var onmessage = function (event) {
    //参数表示主线程转递过来的一个对象，里面信息繁多
    console.log(event);
    //data属性可以获取主线程传递过来的数据
    var data = event.data;
    data =Fb(data);
    postMessage(data);
}
