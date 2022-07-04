const env = {
    port: 9000,
    isDev: process.env.NODE_ENV === 'development',
    isPro: process.env.NODE_ENV === 'production',
    NODE_ENV: process.env.NODE_ENV,
    proxy: {
        dev: 'http://dev.iot.ihomecloud.cn',
        dev81: 'http://dev.iot.ihomecloud.cn:81',
        remote: 'http://120.76.238.19:12348/remote',
        test: 'http://test.iot.ihomecloud.cn',
        shtest: 'http://sh-test.ihomecloud.cn',
        test3: 'http://test3.iot.ihomecloud.cn',
        fwx: 'http://192.168.10.100:8888',
    },
}

module.exports = env
