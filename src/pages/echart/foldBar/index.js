import { useEffect, useRef } from 'react'
import { Canvas, Chart, Axis, Interval, Legend } from '@antv/f2'

let data = [
    // {
    //     name: '总电箱',
    //     月份: 'Jan.',
    //     月均降雨量: Math.random() * 1000,
    // },
    // {
    //     name: '总电箱',
    //     月份: 'Feb.',
    //     月均降雨量: Math.random() * 1000,
    // },
    // {
    //     name: '总电箱',
    //     月份: 'Mar.',
    //     月均降雨量: Math.random() * 1000,
    // },
    // {
    //     name: '总电箱',
    //     月份: 'Apr.',
    //     月均降雨量: Math.random() * 1000,
    // },
    // {
    //     name: '总电箱',
    //     月份: 'May.',
    //     月均降雨量: Math.random() * 1000,
    // },
    // {
    //     name: '总电箱',
    //     月份: 'Jun.',
    //     月均降雨量: Math.random() * 1000,
    // },
    // {
    //     name: '总电箱',
    //     月份: 'Jul.',
    //     月均降雨量: Math.random() * 1000,
    // },
    // {
    //     name: '总电箱',
    //     月份: 'Aug.',
    //     月均降雨量: Math.random() * 1000,
    // },
]

for (let ii = 0; ii < 16; ii++) {
    data = data.concat([
        {
            name: '电箱' + (ii + 1),
            月份: 'Jan.',
            月均降雨量: Math.random() * 100,
        },
        {
            name: '电箱' + (ii + 1),
            月份: 'Feb.',
            月均降雨量: Math.random() * 100,
        },
        {
            name: '电箱' + (ii + 1),
            月份: 'Mar.',
            月均降雨量: Math.random() * 100,
        },
        {
            name: '电箱' + (ii + 1),
            月份: 'Apr.',
            月均降雨量: Math.random() * 100,
        },
        {
            name: '电箱' + (ii + 1),
            月份: 'May.',
            月均降雨量: Math.random() * 100,
        },
        {
            name: '电箱' + (ii + 1),
            月份: 'Jun.',
            月均降雨量: Math.random() * 100,
        },
        {
            name: '电箱' + (ii + 1),
            月份: 'Jul.',
            月均降雨量: Math.random() * 100,
        },
        {
            name: '电箱' + (ii + 1),
            月份: 'Aug.',
            月均降雨量: Math.random() * 100,
        },
    ])
}

const EchartDemo = () => {
    const domRef = useRef(null)
    useEffect(() => {
        if (domRef.current) {
            const echartDom = domRef.current
            const context = echartDom.getContext('2d')

            const { props } = (
                <Canvas context={context} pixelRatio={window.devicePixelRatio}>
                    <Chart data={data}>
                        <Legend />
                        <Axis field="月份" />
                        <Axis field="月均降雨量" />
                        <Interval x="月份" y="月均降雨量" color="name" adjust="stack" />
                    </Chart>
                </Canvas>
            )

            const chart = new Canvas(props)
            chart.render()
        }
    })
    return (
        <div>
            <canvas width="700" height="360" ref={domRef}></canvas>
        </div>
    )
}

export default EchartDemo
