import { getPokemon } from "./other-route/api";
import { PokemonCard } from "./components/PokemonCard";
import { redirect } from "next/navigation";
import { RedirectType } from "next/navigation";

export default async function Home() {
  const pokemon = await getPokemon({ limit: 9, offset: 0 });

  async function triggerServerAction() {
    "use server";
    redirect("/other-route", RedirectType.push);
  }

  return (
    <main className="max-w-[1200px] m-auto p-10">
      <div className="grid md:grid-cols-3 gap-10">
        {pokemon.results.map((pokemon) => (
          <PokemonCard key={pokemon.name} {...pokemon} />
        ))}
      </div>
      <form action={triggerServerAction}>
        <button type="submit" className="btn btn-primary mx-auto block mt-5">
          trigger server action with redirect()
        </button>
      </form>
    </main>
  );
}
