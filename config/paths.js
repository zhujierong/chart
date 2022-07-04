const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolvePath = (relativePath) => path.resolve(appDirectory, relativePath)

const paths = {
    root: appDirectory,
    src: resolvePath('src'),
    dist: resolvePath('dist'),
    assets: resolvePath('assets'),
    image: resolvePath('assets/img'),
    entry: resolvePath('src/index.tsx'),
    htmlTemplate: resolvePath('assets/index.html'),
    api: resolvePath('src/api'),
    common: resolvePath('src/common'),
    utils: resolvePath('src/utils'),
    component: resolvePath('src/component'),
}
module.exports = paths
