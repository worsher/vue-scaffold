/**
 * 
 * @authors wails (w86534309@gmail.com)
 * @date    2019-07-12 22:51:04
 * @version 1.0
 * @desc 打包类文件
 * 官方文档地址：https://cli.vuejs.org/zh/config
 */

module.exports = {
    productionSourceMap : process.env.NODE_ENV === 'production', 
    lintOnSave: process.env.NODE_ENV !== 'production',
    //dev本地代理参数
    devServer : {
        port : 8080,
        compress : true,//gzip压缩
        progress : false,//不显示打包进度
        open : true
    },
    runtimeCompiler : true,//运行时可以编译template（待测试）
}