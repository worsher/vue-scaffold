/**
 * 
 * @authors Wangfeiran (wangfeiran@qiyi.com)
 * @date    2019-07-12 19:12:56
 * @version 1.0.0
 * @desc 公共组件安装（main.js加载，全局使用）
 */
const componets = {
	
}
export default {
	install (Vue){
		for(var k in componets){
			let value = componets[k]
			Vue.component(value.name,value)
		}
		
	}
}

