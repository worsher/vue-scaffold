# vue-scaffold
根据自己的理解搭建一个通用型的脚手架，涵盖路由、多模块、数据模型等

## 模式区分
* test : 测试模式 npm run test
* development ： 开发模式 npm run dev
* production ： 生产模式 npm run build

## 使用的第三方工具库
* axios
* lodash
* @babel/plugin-proposal-optional-chaining 使用可用链的babel编译库
* vue-fragment 兼容vue3.0fragment组件，解决组件单一根元素问题

## 路由配置懒加载
增加before、after拦截路由执行前后

## todolist : 
1. 数据模型抽象
2. url模型抽象