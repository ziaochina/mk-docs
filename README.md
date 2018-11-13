> 新版框架已于2018.10.24号正式发布:

> 官网：https://www.makajs.org

> 代码: https://github.com/makajs/maka

# mk-docs

- mk系列介绍网站

- 使用markdown写的相关文档

- 本网站也是用mk框架创建

- 在线访问:[https://ziaochina.github.io/mk-docs/](https://ziaochina.github.io/mk-docs/)

## 运行本项目

```
$ npm install
$ npm start
```
## 可能遇到的问题

- 如果npm start报错not found module
```
$ npm cache clean --force
$ rm -rf node_modules
$ rm -rf package-lock.json
$ npm install
```

- 2017.9.27 react v16.0.0版本发布

```
//这之前clone的版本npm update后可能会出现各种问题，请按下面步骤修复

$ git pull //更新最新的demo代码，或者重新clone一份
$ npm i -g mk-tools
$ npm cache clean --force
$ rm -rf node_modules
$ rm -rf package-lock.json
$ npm install
$ npm start

```

## DEMO

使用mk框架创建的一个demo

> DEMO代码库：[https://github.com/ziaochina/mk-demo](https://github.com/ziaochina/mk-demo)

> DEMO在线效果（用户名:13334445556 密码：1）:[https://ziaochina.github.io/mk-demo/](https://ziaochina.github.io/mk-demo/)
