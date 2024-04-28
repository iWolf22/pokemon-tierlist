export default function typeToColor(type: string) {
    const typeColor = [
        "bug", "#92BC2C",
        "dark", "#595761",
        "dragon", "#0C69C8",
        "electric", "#F2D94E",
        "fire", "#FBA54C",
        "fairy", "#EE90E6",
        "fighting", "#D3425F",
        "flying", "#A1BBEC",
        "ghost", "#5F6DBC",
        "grass", "#5FBD58",
        "ground", "#DA7C4D",
        "ice", "#75D0C1",
        "normal", "#A0A29F",
        "poison", "#B763CF",
        "psychic", "#FA8581",
        "rock", "#C9BB8A",
        "steel", "#5695A3",
        "water", "#539DDF",
    ];

    var color = "black";

    for (let i = 0; i < typeColor.length / 2; i++) {
        if (type === typeColor[i * 2]) color = typeColor[i * 2 + 1];
    }

    return color;
}