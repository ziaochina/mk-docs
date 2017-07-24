# mk

使用mk搭建的 <a href="https://ziaochina.github.io/mk-demo/" target="_blank">[网站演示]</a> <a href="https://github.com/ziaochina/mk-demo/" target="_blank">[代码]</a>

## 简介

- mk = Monkey King = 齐天大圣 
- mk系列是一套完整的前、后台解决方案

## 核心项目

### 1、mk-app-loader  <a href="https://github.com/ziaochina/mk-app-loader" target="_blank">[代码]</a>
- 基于react, redux, immutable
- 简化原生redux实现状态管理的过程
- 以app的方式组织代码，隔离app状态
- 单页程序，通过提供不同app名装载不同应用
- 每个app模式统一，可维护性强，大规模开发，项目管理更加容易

### 2、mk-server <a href="https://github.com/ziaochina/mk-server" target="_blank">[代码]</a>

- 基于nodejs, hapi, sequelize, node-zookeeper-dubbo的开源项目
- 实现了webapi框架、IoC依赖注入、RPC远程调用、数据库访问、事务、身份授权

### 3、mk-component <a href="https://github.com/ziaochina/mk-component" target="_blank">[代码]</a>  <a href="https://ziaochina.github.io/mk-component" target="_blank">[在线demo]</a>

- 基于antd、fixed-data-table、echats等
- 纯组件库

### 4、mk-meta-engine  <a href="https://github.com/ziaochina/mk-meta-engine" target="_blank">[代码]</a>

- 元数据化(json)界面元素
- 提供统一的行为交互，状态操作方法

### 5、mk-utils <a href="https://github.com/ziaochina/mk-utils" target="_blank">[代码]</a>

- 提供fetch等有用的函数库
- fetch支持mock;以及before、after切面处理

### 6、mk-tools <a href="https://github.com/ziaochina/mk-tools" target="_blank">[代码]</a>

- 基于nodejs的命令行工具
- 支持快速创建website、app脚手架
- 编译网站下所有app自动生成入口程序


## App模板项目

App模板项目，依赖上述核心项目实现的，并发布到npmjs，可以使用mk clone命令，克隆到本地website下

### 1、mk-app-root <a href="https://github.com/ziaochina/mk-app-root" target="_blank">[代码]</a>  <a href="https://ziaochina.github.io/mk-app-root" target="_blank">[在线demo]</a>

- 该模板可以作为website的start app使用，它赋予子组件或app,redirect能力

### 2、mk-app-login <a href="https://github.com/ziaochina/mk-app-login" target="_blank">[代码]</a>  <a href="https://ziaochina.github.io/mk-app-login" target="_blank">[在线demo]</a>

- 登录模板，克隆后根据需求修改

### 3、mk-app-portal <a href="https://github.com/ziaochina/mk-app-portal" target="_blank">[代码]</a>  <a href="https://ziaochina.github.io/mk-app-portal" target="_blank">[在线demo]</a>


- 门户模板，克隆后根据需求修改

### 4、mk-app-person-list <a href="https://github.com/ziaochina/mk-app-person-list" target="_blank">[代码]</a>  <a href="https://ziaochina.github.io/mk-app-person-list" target="_blank">[在线demo]</a>


- 人员列表模板，克隆后根据需求修改

### 5、mk-app-person-card  <a href="https://github.com/ziaochina/mk-app-person-card" target="_blank">[代码]</a>  <a href="https://ziaochina.github.io/mk-app-person-card" target="_blank">[在线demo]</a>

- 人员卡片模板，克隆后根据需求修改

## Service模板项目（待续）




