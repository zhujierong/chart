import { useRoutes } from 'react-router-dom'
import routerConfig from '../router'
// import { ProLayout, getMenuData } from '@ant-design/pro-components'
// import Header from './header'
import './index.scss'

const Layout = () => {
    let routerDom = useRoutes(routerConfig)
    // const { breadcrumb, menuData } = getMenuData(routes, menu, formatMessage, menuDataRender)

    return routerDom
}

export default Layout
