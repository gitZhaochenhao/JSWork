# 1. 在线文档
	yarn: https://yarnpkg.com/zh-Hans/docs/cli
	npm: https://www.npmjs.cn/

# 2. 常用命令
## 初始化项目: 
	yarn init -y
	npm init -y

## 下载项目的所有声明的依赖: 
	yarn
	npm install 或 npm i

## 下载指定的运行时依赖包: 
	yarn add webpack@3.2.1
	npm install webpack@3.2.1 -S

## 下载指定的开发时依赖: 
	yarn add xxxxx@3.2.1 -D
	npm install xxxxxxx@3.2.1 -D

## 全局下载指定包: 
	yarn global add xxxxxx
	npm install xxxxx -g

## 删除依赖包: 
	yarn remove xxxxx
	npm remove xxxxxx -S
	yarn global remove xxxxxx
	npm remove xxxxx -g

## 运行项目中配置的script: 
	yarn run xxx
	npm run xxx
	
## 查看某个包的信息: 
	yarn info xxx
	npm info xxx

## 设置仓库地址为淘宝镜像: 
	yarn config set registry https://registry.npm.taobao.org
	npm config set registry https://registry.npm.taobao.org

