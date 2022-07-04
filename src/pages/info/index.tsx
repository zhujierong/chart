interface IProps {
    name?: string
    xx?: number
    cc?: Object
}

const InfoPage = (props: IProps) => {
    const { name, xx, cc } = props
    let x
    const b = { x: 1 }
    b.x = 11
    return (
        <div>
            {JSON.stringify(name)}
            {xx}
            {JSON.stringify(b)}
        </div>
    )
}

export default InfoPage
