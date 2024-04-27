"use client";

import { useState, useEffect } from "react";

export default function Home() {

	const [numFetch, setNumFetch] = useState(1);
	const [pokemonList, setPokemonList] = useState<any[]>([]);

	async function fetchPokemon() {

		var urls = [];
		for (let i = 0; i < 4; i++) {
			urls.push("https://pokeapi.co/api/v2/pokemon/" + (numFetch + i));
		}

		try {
			const res = await Promise.all(urls.map(e => fetch(e)));
			const resJson = await Promise.all(res.map(e => e.json()));
			console.log(urls);
			console.log(pokemonList);
			console.log(resJson);
			setPokemonList([...pokemonList, ...resJson]);
			var temp = numFetch + 12
			setNumFetch(temp);
		} catch (e) {
			console.log(e);
		}
	}

  useEffect(() => {
		onscroll()

    function onscroll() {
      if (document.body.scrollHeight - 5 <= window.scrollY + window.innerHeight) fetchPokemon();
    };
    window.addEventListener("scroll", onscroll);
    return () => {
      window.removeEventListener("scroll", onscroll);
    };
  }, []);

  return (
    <div>
      <h1>Pokemon Tier List</h1>
			<div className="bg-slate-400">
				{pokemonList.map((e, i) => {
					return (
						<div key={i}>
							{JSON.stringify(e)}
							<br/>
						</div>
					)
				})}
			</div>
    </div>
  );
}