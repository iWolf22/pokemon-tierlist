import typeToColor from "@/scripts/typeToColor";

export default function PokemonType(props: {type: string}) {
    return (
        <div>
            <img width="25px" style={{backgroundColor: typeToColor(props.type)}} className="p-1 rounded-full" src={"https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/" + props.type + ".svg"}></img>
        </div>
    )
}
    