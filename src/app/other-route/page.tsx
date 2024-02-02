import { PokemonCard } from "../components/PokemonCard";
import { getPokemon } from "./api";

export const dynamic = "force-dynamic";

export default async function OtherRoute() {
  const pokemon = await getPokemon({ limit: 9, offset: 9 });

  return (
    <main className="max-w-[1200px] m-auto p-10 grid md:grid-cols-3 gap-10">
      {pokemon.results.map((pokemon) => (
        <PokemonCard key={pokemon.name} {...pokemon} />
      ))}
    </main>
  );
}
