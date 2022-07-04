import './style/index.scss'
import { BrowserRouter } from 'react-router-dom'
import Layout from './layout'

const App = () => {
    return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    )
}

export default App
