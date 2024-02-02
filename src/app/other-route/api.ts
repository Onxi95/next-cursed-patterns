export async function getPokemon({
  limit,
  offset,
}: {
  limit: number;
  offset: number;
}) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
  );
  const json = (await response.json()) as Response;
  return {
    ...json,
    results: json.results.map((pokemon) => {
      const id = Number(pokemon.url.split("/").at(-2));
      return {
        id,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
        ...pokemon,
      };
    }),
  };
}

type Response = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
};

type Pokemon = {
  name: string;
  url: string;
};
