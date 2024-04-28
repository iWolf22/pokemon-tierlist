export default function PokemonPage(props: { params: {id : number} }) {
    return (
        <div>
            <h1>{props.params.id}</h1>
        </div>
    )
}