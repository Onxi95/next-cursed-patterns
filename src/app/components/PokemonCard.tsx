import Image from "next/image";

type PokemonCardProps = {
  name: string;
  image: string;
};

export const PokemonCard = ({ name, image }: PokemonCardProps) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl" key={name}>
      <figure>
        <Image src={image} alt={name} width={200} height={200} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Placeholder for description here</p>
      </div>
    </div>
  );
};
