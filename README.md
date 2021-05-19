# saas-web 简介
`saas-web` 的前身是`dwi-ui`(租户端) + `dwi-admin-ui`(平台管理端)，目前将2个系统合并为`saas-web`，它是`saas`项目的其中一员。原来在dwi-admin-ui系统的功能已经合并到内置租户【0000】，账号【saas_pt】中。

`saas-web` 是 [saas-cloud]() 和 [saas-boot]() 2个后台项目共用的管理后台，仅需在启动时调整`vue.config.js`文件中的代理。它基于[vue element admin](https://panjiachen.github.io/vue-element-admin-site/zh/)构建。

## saas-cloud/saas-boot + saas-web 功能介绍：
1. 租户管理：运营人员管理所有的租户创建
2. 工作台：普通用户常用功能
3. 组织管理：组织、岗位、用户数据维护、重置用户密码等
4. 资源中心：消息、短信、附件管理
5. 流程管理：流程部署、模型管理、流程示例
6. 系统设置：菜单、资源配置、角色管理、给角色绑定用户、给角色授权菜单和资源、字典、地区、系统参数、操作日志、登录日志、应用管理等
7. 网关设置：限流和阻止访问
8. 开发者管理：定时任务、接口文档、注册&配置中心、服务监控、数据库监控、zipkin监控、SkyWalking监控

## 技术栈

- Vue
- ES6
- Webpack
- Vue-cli
- Vue-router
- Vuex
- Axios
- Element-UI
- ECharts
