# 快速创建hello world网站

## 1、安装mk-tools命令行工具

```
$ npm i -g mk-tools
```

## 2、创建空website

```
$ mk website helloWorld
$ cd helloWorld
```

## 3、在website创建一个app

```
$ mk app apps/firstApp
```

## 4、编译
- 编译会生成index.js,mock.js,apps.less 文件
```
$ mk compile website
```

## 5、修改website配置

```
//打开config.js，修改_options.startAppName的值
_options.startAppName = 'firstApp' //启动app名，需要根据实际情况配置
```

## 6、启动website

```
$ npm start
```

