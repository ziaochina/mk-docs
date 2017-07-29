# mk常用命令

## 安装

```
$ sudo npm i -g mk-tools
```

## 创建Website

```
$ mk website [website name /*网站名称，可空， 默认"website-demo"*/]
```

## 创建App

```
$ mk app [app name /*app名称，可空，支持路径（apps/appName），默认"app-demo"*/]
```


## 创建空Sever

```
$ mk server [server name /*server名称，可空，默认"server-demo"*/]
```

## 创建Service

```
$ mk service [service name /*service名称，可空,支持路径(services/serviceName),默认：“service-demo”*/]
```

## 克隆App

```
$ mk clone <app name/*npmjs发布的App或者Service,支持多个已逗号分隔*/> <targetPath /*目标路径，路径如果以'/'结尾那么会在'/'后面加上app name*/>
```

## 编译

```
$ mk compile <'website' or 'server' /*编译网站或者服务*/>
```


## 完整演示创建一个网站

```
$ sudo npm i -g mk-tools
$ mk website www
$ cd www
$ mk clone mk-app-login apps/
$ mk compile website
$ npm start
```

## 完整演示创建一个server


```
$ sudo npm i -g mk-tools
$ mk server server
$ cd server
$ mk clone mk-service-login services/
$ mk compile server
$ node index.js
```


