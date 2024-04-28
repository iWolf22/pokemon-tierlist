"use client";

import PokemonCard from "@/components/PokemonCard";
import { useState, useEffect } from "react";

export default function Pokemon() {

	const [numFetch, setNumFetch] = useState(1);
	const [pokemonList, setPokemonList] = useState<any[]>([]);

	async function onscroll() {
		if (document.body.scrollHeight - 2 <= window.scrollY + window.innerHeight) {
			var urls = [];
			for (let i = 0; i < 12; i++) {
				urls.push("https://pokeapi.co/api/v2/pokemon/" + (numFetch + i));
			}
	
			try {
				const res = await Promise.all(urls.map(e => fetch(e)));
				const resJson = await Promise.all(res.map(e => e.json()));
				setPokemonList([...pokemonList, ...resJson]);
				setNumFetch(numFetch + 12);
			} catch (e) {
				console.log(e);
			}
		}
	};

	useEffect(() => {
		onscroll();
		window.addEventListener("scroll", onscroll);
		return () => {
			window.removeEventListener("scroll", onscroll);
		};
	}, [numFetch, pokemonList]);

	return (
		<div>
			<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
				{pokemonList.map((e, i) => {
					return (
						<PokemonCard e={e} key={i} />
					)
				})}
			</div>
		</div>
	);
}