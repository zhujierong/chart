import HomePage from '../pages/home'
import EchartBarDemo from '../pages/echart/bar'
import BrokenLineDemo from '../pages/echart/brokenLine'
import FoldBar from '../pages/echart/foldBar'
import Line from '../pages/echart/line'

const routerConfig = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: 'echart',
        // element: <EchartBarDemo />,
        children: [
            {
                path: 'bar',
                element: <EchartBarDemo />,
            },
            {
                path: 'foldBar',
                element: <FoldBar />,
            },
            {
                path: 'line',
                element: <Line />,
            },
            {
                path: 'brokenLine',
                element: <BrokenLineDemo />,
            },
        ],
    },
    // {
    //     path: 'home',
    //     element: <div>home1</div>,
    // },
    // {
    //     path: '/home',
    //     element: <div>home2</div>,
    // },
    // {
    //     path: 'team',
    //     element: <div>4</div>,
    //     children: [
    //         {
    //             index: true,
    //             element: <div>home</div>,
    //         },
    //         {
    //             path: 'messages',
    //             element: <div>2</div>,
    //         },
    //         { path: 'tasks', element: <div>3</div> },
    //     ],
    // },
]

const antdRouterConfig = []

export default routerConfig
