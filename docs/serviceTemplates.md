
# service模板项目

Service模板项目，已发布到npmjs，可以使用mk clone命令，克隆到本地server目录下；或npm install，然后在config.js中引入

## 1、mk-service-utils <a href="https://github.com/lishengguo/mk-service-utils" target="_blank">[代码]</a>   
- 该服务组件不对外发布url，api中提供env（解析配置项中的环境变量如pwd="${mypwd}"）；md5；objectId（返回15位的ID，前13位是时间后2位是随机数）

## 2、mk-service-auth <a href="https://github.com/lishengguo/mk-service-auth" target="_blank">[代码]</a>  

- 登录验证服务组件，通过拦截器向上下文中注册setToken方法，token对象。

## 3、mk-service-db <a href="https://github.com/lishengguo/mk-service-db" target="_blank">[代码]</a>  

- 数据库访问组件，对Sequelize的包装，通过拦截器自动增加数据库事务。

## 4、mk-service-user <a href="https://github.com/lishengguo/mk-service-user" target="_blank">[代码]</a> 

- 用户服务组件，对外提供login,create,update方法。
 