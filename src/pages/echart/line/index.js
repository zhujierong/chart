import { useEffect, useRef } from 'react'
import { Canvas, Chart, Line, Axis, Legend } from '@antv/f2'
import { clone, values } from 'lodash'

const BrokenLine = () => {
    const domRef = useRef(null)
    useEffect(() => {
        if (domRef.current) {
            const echartDom = domRef.current
            const context = echartDom.getContext('2d')

            fetch('https://gw.alipayobjects.com/os/antfincdn/OVMtvjbnut/series-line.json')
                .then((res) => res.json())
                .then((data) => {
                    const { props } = (
                        <Canvas context={context} pixelRatio={window.devicePixelRatio}>
                            <Chart data={data}>
                                <Axis
                                    field="date"
                                    tickCount={3}
                                    style={{
                                        label: { align: 'between' },
                                    }}
                                />
                                <Axis field="value" tickCount={5} />
                                <Line x="date" y="value" lineWidth="4px" color="type" />
                                <Legend
                                    position="top"
                                    style={{
                                        justifyContent: 'space-around',
                                    }}
                                    triggerMap={{
                                        press: (items, records, legend) => {
                                            const map = {}
                                            items.forEach((item) => (map[item.name] = clone(item)))
                                            records.forEach((record) => {
                                                map[record.type].value = record.value
                                            })
                                            legend.setItems(values(map))
                                        },
                                        pressend: (items, records, legend) => {
                                            legend.setItems(items)
                                        },
                                    }}
                                />
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
            <canvas width="700" height="360" ref={domRef}></canvas>
        </div>
    )
}

export default BrokenLine
