/**
 * 
 * @authors wails (w86534309@gmail.com)
 * @date    2019-07-13 09:36:59
 * @version 1.0
 * @desc 纯路由配置文件，模板动态加载
 */
export default [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/About.vue')
    }
]
