module.exports = {
    presets: [
        [
            '@babel/preset-react',
            {
                runtime: 'automatic', // 自动导入JSX转换函数来 转化JSX
            },
        ],
        '@babel/preset-typescript',
    ],
    plugins: [
        [
            'import',
            {
                libraryName: 'antd',
                style: true, // or 'css'
            },
        ],
        'react-refresh/babel',
    ],
}
