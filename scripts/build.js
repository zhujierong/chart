const fs = require('fs')
const paths = require('../config/paths')
const webpack = require('webpack')

fs.rmdirSync(paths.dist, { recursive: true })

const webpackConfigFactory = require('../config/webpack.config')
const webpackConfig = webpackConfigFactory('production')
webpack(webpackConfig, (err, stats) => {
    if (err) {
        console.log(JSON.stringify(err))
    }
    if (stats && stats.hasErrors()) {
        // 编译错误信息
        const errInfo = stats.toJson({ all: false, warnings: true, errors: true })
        if (Array.isArray(errInfo.warnings) && errInfo.warnings.length) {
            console.error('编译警告：')
            errInfo.warnings.map(({ message }, index) => {
                console.log('------------>>>>>>> warnings index:', index)
                console.log(message)
            })
        }
        if (Array.isArray(errInfo.errors) && errInfo.errors.length) {
            console.error('编译错误：')
            errInfo.errors.map((item, index) => {
                const { message, moduleName, moduleIdentifier, loc } = item
                console.log('------------>>>>>>> error index:', index)
                console.log(message, 'loc', loc)
                console.log('path moduleName:', moduleName)
                // console.log('path moduleIdentifier:', moduleIdentifier)
            })
        }
    }
    //  处理完成
})
