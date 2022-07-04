const appPath = require('./paths')
const appConfig = require('./index.js')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const ESlintWebpackPlugin = require('eslint-webpack-plugin')
const path = require('path')

module.exports = function (env) {
    const isEnvDevelopment = env === 'development'
    const isEnvProduction = env === 'production'
    const config = {
        mode: env,
        entry: appPath.entry,
        output: {
            path: appPath.dist,
            assetModuleFilename: 'img/[name].[hash:8][ext]',
            filename: '[name].[chunkhash].js',
            // 1.不配置publicPath时，输出路径'main.js' //会导致二级路由访问 '二级路由路径/main.js' 访问错误路径
            publicPath: '/', // 输出路径'/main.js'
        },
        plugins: [
            new HTMLWebpackPlugin({
                template: appPath.htmlTemplate,
            }),
            isEnvProduction &&
                new MiniCssExtractPlugin({
                    filename: 'css/[name].css',
                }),
            isEnvDevelopment && new ReactRefreshWebpackPlugin(),
            new ESlintWebpackPlugin(),
        ].filter(Boolean),
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            alias: {
                '@': appPath.src,
                '@api': appPath.api,
                '@assets': appPath.assets,
                '@common': appPath.common,
                '@component': appPath.component,
            },
        },
        module: {
            rules: [
                {
                    test: /\.(js|tsx)$/,
                    use: ['babel-loader'],
                    exclude: /node_modules/,
                },
                {
                    test: [/\.scss$/, /\.css$/, /\.less$/],
                    use: [
                        isEnvDevelopment && 'style-loader',
                        isEnvProduction && MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                        {
                            loader: 'less-loader', // 处理antd模块化引入的less
                            options: {
                                lessOptions: {
                                    javascriptEnabled: true, // 启用antd中less的mixin支持
                                },
                            },
                        },
                    ].filter(Boolean),
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    type: 'asset/resource',
                },
            ],
        },
    }

    if (isEnvDevelopment) {
        config.devtool = 'eval-source-map'
        config.devServer = {
            port: appConfig.port,
            hot: true,
            historyApiFallback: true,
            client: {
                overlay: {
                    errors: true,
                    warnings: true,
                },
            },
            // static: {
            //     directory: paths.assets,
            // },
        }
    }

    if (isEnvProduction) {
        config.optimization = {
            minimize: true,
            minimizer: [new CssMinimizerPlugin(), '...'],
            splitChunks: {
                chunks: 'initial',
                cacheGroups: {
                    common: {
                        test: (module) => {
                            const result = /[\\/]node_modules[\\/]/.test(module.context)
                            return result
                        },
                        name: 'common',
                        priority: 10,
                    },
                    reactBase: {
                        test: (module) => {
                            // const suffix = path.basename(module.context)
                            if (!module.context) return
                            const curPath = path.parse(module.context)
                            const cwd = process.cwd()
                            const suffix = curPath.dir.replace(cwd, '')
                            const result = /react|redux|prop-types/.test(suffix)
                            return result
                        },
                        name: 'reactBase',
                        priority: 30,
                    },
                    antdBase: {
                        test: (module) => {
                            if (!module.context) return
                            // const suffix = path.basename(module.context)
                            const curPath = path.parse(module.context)
                            const cwd = process.cwd()
                            const suffix = curPath.dir.replace(cwd, '')
                            const result = /antd/.test(suffix)
                            return result
                        },
                        name: 'antdBase',
                        priority: 30,
                    },
                },
            },
        }
        config.plugins.push(new CompressionWebpackPlugin())
    }
    return config
}
