import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'

import lodash from 'lodash'
import axios from 'axios'
import utils from './common/utils'
//默认自定义公共组件
import CommonComponents from "@/components/common"
//加载特殊字体
import 'font-awesome/scss/font-awesome.scss'
import { Plugin } from 'vue-fragment'

//fragment插件
Vue.use(Plugin)

Vue.use(CommonComponents)
console.log(process.env.NODE_ENV)
// http response 拦截器 全局拦截，抛出错误
axios.interceptors.response.use(
    response => {
        var data = response.data;
        if(data.code === 0){
            return data.data;
        }else {
            return data;
        }
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                // 如果后端返回没有权限
                case 403 : 
                    router.push("/errors/403");
                    break;
                case 401:
                    // 清除token信息并跳转到登录页面
                    if(store.state.common.router.requiresAuth){
                        localStorage.clear()
                        store.commit("logout")
                    } 
                    break;                 
            }
        }
        //403跳转时不抛出错误，直接跳转
        if(error.response.status != 403){
            return Promise.reject(error.response.data.message) // 返回接口返回的错误信息
        }else{
            return null;
        }
    }
)

//生产环境，不允许被调试
if (process.env.NODE_ENV === 'production') {
  Vue.config.devtools = false;
} else {
  Vue.config.devtools = true;
}

//全局变量挂载
window.utils = utils;
window.$$ = axios;
window._ = lodash;

//window在模板中无法访问，挂载到Vue对象中引用访问
Vue.prototype.global = window;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
