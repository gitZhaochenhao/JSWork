
#1.国内使用npm存在的问题

* 安装npm后，默认的远程仓库地址为：http://registry.npmjs.org 
* 查看当前npm远程仓库地址：``` npm config get registry ```，会提示如下：
![Alt text](https://s2.ax1x.com/2019/01/08/FqtKhR.png)

* 国内使用npm存在的问题：npm的远程服务器在国外，所以有时候难免出现访问过慢，甚至无法访问的情况。
* 为了解决这个问题，我们有以下几个解决办法

#2.使用cnpm

> 阿里云·淘宝为我们搭建了一个国内的npm服务器，它目前是每隔10分钟将国外npm仓库的所有内容“搬运”回国内的服务器上，这样我们直接访问淘宝的国内服务器就可以了，它的地址是：https://registry.npm.taobao.org

##cnpm的第一种使用方法：直接安装cnpm
安装淘宝提供的cnpm，并更改服务器地址为淘宝的国内地址，
1. 安装命令：``` npm install -g cnpm --registry=https://registry.npm.taobao.org```。
2. 以后安装直接采用cpm替代npm，例如：

> npm命令为：```npm install uniq --save```，
> cnpm命令为：```cnpm install uniq --save```

##cnpm的第二种使用方法：替换npm仓库地址为cnpm仓库地址

1. 命令：```npm config set registry https://registry.npm.taobao.org```，
2. 查看是否更改成功：```npm config get registry ```
3. 以后安装时，依然用npm命令，但是实际是从淘宝国内服务器下载的


#3.使用yarn

 Yarn发布于2016年10月，截至当前2019年6月，gitHub上的Start数量为：36.1k，已经超过npm很多了，yarn使用本地缓存，效率和速度都比npm快很多。

> 安装yarn的命令：```npm install -g yarn```

命令举例：
1. 添加依赖包：```yarn add xxx --dev```
2. 全局安装：```yarn global add xxx```
3. 查看yarn全局安装位置：```yarn global dir```
	备注：值得注意的是yarn的全局安装位置和npm的不一样，若想正常使用yarn全局安装的包，要把```yarn global bir```返回的地址加到环境变量中。
4. 备注：yarn的详细命令，请参考课件中的：yarn与npm命令的对应关系.md





