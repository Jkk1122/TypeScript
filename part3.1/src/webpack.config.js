// 引入一个包
const path = require('path')

// webpack的配置文件都写在module.exports中
module.exports = {

    // 指定入口文件
    entry:"./src/index.ts",

    // 指定打包后文件所在目录
    output:{
        // 指定打包文件的目录
        path:path.resolve(__dirname,'dist'),
        // 打包后的文件
        filename:"bundle.js"
    },

    // 指定webpack打包时要用的模块
    module:{
        // 指定要加载的规则
        rules:[
            {
                // test是指的规则生效的文件
                test:/\.ts$/,
                // 要使用的loader
                use:'ts-loader',
                // 要排除的文件
                exclude:/node_modules/
            }
        ],
    },
    mode:"production"
}