import { useEffect, useRef } from 'react'
import { Canvas, Chart, Line, Point, Axis, ScrollBar } from '@antv/f2'

const BrokenLine = () => {
    const domRef = useRef(null)
    useEffect(() => {
        if (domRef.current) {
            const echartDom = domRef.current
            const context = echartDom.getContext('2d')

            fetch('https://gw.alipayobjects.com/os/antfincdn/Jpuku6k%24q%24/linear-pan.json')
                .then((res) => res.json())
                .then((data) => {
                    const { props } = (
                        <Canvas
                            context={context}
                            animate={false}
                            pixelRatio={window.devicePixelRatio}
                        >
                            <Chart data={data}>
                                <Axis field="release" tickCount={5} nice={false} />
                                <Axis field="count" />
                                <Line x="release" y="count" />
                                <Point x="release" y="count" />
                                <ScrollBar mode="x" range={[0.1, 0.3]} />
                            </Chart>
                        </Canvas>
                    )

                    const chart = new Canvas(props)
                    chart.render()
                })
        }
    })
    return (
        <div>
            xxxxxxxx
            <canvas width="700" height="360" ref={domRef}></canvas>
        </div>
    )
}

export default BrokenLine
