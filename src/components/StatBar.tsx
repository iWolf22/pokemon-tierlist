export default function StatBar(props: { name: string, value: number, color: string }) {
    return (
        <div className="pb-2">
            <div className="flex justify-between">
            <p className="text-xs">{props.name}</p>
            <p className="text-xs">{props.value}</p>
            </div>
            <div className="bg-white" style={{height: "2px"}}>
                <div style={{width: Math.round(100 * props.value / 150) + "%", backgroundColor: props.color, height: "2px"}}>
                </div>
            </div>
        </div>
    )
}