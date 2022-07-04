/* eslint-disable no-undef */
module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 6, // 指定ECMAScript版本
        sourceType: 'module', // 指定源代码类型
        ecmaFeatures: {
            jsx: true, // 启用JSX
        },
    },
    // 启用eslint推荐的标准规则
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/jsx-runtime', // 启用新JSX转换模式规则
        // 'react-app', // 包含React，JSX，ES6，TypeScript和Flow语法支持。
    ],
    rules: {
        'prettier/prettier': 'error', // 检查 prettier 规则
        'no-const-assign': 'error', // 禁止修改常量
        'react/jsx-uses-react': 'off', // 关闭旧模式的JSX校验
        'react/react-in-jsx-scope': 'off', // 关闭旧模式的JSX校验
    },
    plugins: [
        'prettier', // 启用eslint-plugin-prettier, 将不符合prettier格式代码加入到eslint中管理
        'react-hooks',
    ],
}
