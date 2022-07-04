
interface requestOption {
    method?: string
    body?: any
    headers?: any
    data?: any
    fn(): void
}
// 使用接口定义对象结构
const post = (url: string, option: requestOption) => {
    return fetch(url, option)
}
// 使用接口定义类的结构
class RequestQQ implements requestOption {
    method = '1'
    fn() { }
}
