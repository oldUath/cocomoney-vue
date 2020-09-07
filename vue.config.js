/* eslint-disable */
const path = require('path')
module.exports = {
    lintOnSave: false,
    chainWebpack: config => {
        const dir = path.resolve(__dirname, 'src/assets/icons')

        //config是webpack暴露出的一个接口
        config.module
            .rule('svg-sprite')//添加一个规则
            .test(/\.svg$/)//以svg结尾的文件但是只包含icons的目录
            .include.add(dir).end()
            .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract: false}).end()
        config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])
        config.module.rule('svg').exclude.add(dir)//排除其他svg文件
    }
}