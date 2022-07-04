const fs = require('fs')
const paths = require('../config/paths')
const webpack = require('webpack')

fs.rmdirSync(paths.dist, { recursive: true })

const WebpackDevServer = require('webpack-dev-server')
const webpackConfigFactory = require('../config/webpack.config')

const webpackConfig = webpackConfigFactory('development')
const compiler = webpack(webpackConfig)

const devServerOptions = { ...webpackConfig.devServer, open: true }
const server = new WebpackDevServer(devServerOptions, compiler)

server.startCallback(() => {
    console.log(`Successfully started server on http://localhost:${webpackConfig.devServer.port}`)
})
