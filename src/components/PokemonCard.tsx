import typeToColor from "@/scripts/typeToColor";
import PokemonType from "./PokemonType";
import StatBar from "./StatBar";
import Link from "next/link";

export default function PokemonCard(props: any) {

    function capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const pokemonColor = typeToColor(props.e.types[0].type.name);

    return (
        <Link href={"/pokemon/" + props.e.id}>
            <div className="col-span-1 rounded-lg bg-slate-200 hover:bg-slate-300 duration-200 border-2" style={{borderColor: pokemonColor}}>
                <div className="p-4">
                    <p className="text-center text-lg font-bold">{capitalizeFirstLetter(props.e.name)}</p>
                    <div className="flex justify-center">
                        <img className="h-24" src={props.e.sprites.front_default}></img>
                    </div>
                    {props.e.stats.map((stat: any, i: number) => {return <StatBar name={stat.stat.name} value={stat.base_stat} color={pokemonColor} key={i} />})}
                    <div className="flex justify-between">
                        <p className="">{props.e.height * 10} cm • {Math.round(props.e.weight * 0.220462)} lb</p>
                        <div className="flex gap-2">
                            {props.e.types.map((type: any, i: number) =>{return <PokemonType type={type.type.name} key={i} />})}
                            <img className="h-6" src={props.e.sprites.other.showdown.front_default}></img>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}