/**
 * 
 * @authors wails (w86534309@gmail.com)
 * @date    2019-07-13 09:17:44
 * @version 1.0
 * @desc 路由配置入口
 */

import Vue from 'vue'
import Router from 'vue-router'
import routes from "./route"
import before from "./before"
import after from "./after"

Vue.use(Router)

var router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
})
//执行路由开始守卫
router.beforeEach(before)
//执行路由结束守卫
router.afterEach(after)

export default router
