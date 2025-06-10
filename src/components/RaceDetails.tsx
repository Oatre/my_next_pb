import { races } from "@/data/races";

export default function RaceDetails(props: { slug: string }) {
  const race = races[props.slug as keyof typeof races];

  if (!race) {
    return <div>Race not found</div>;
  }

  return (
    <div>
      <h1 className="text-lg text-center font-bold text-white">
        Race Details for {race.raceName}
        <section className="max-w-2xl mx-auto space-y-4"></section>
      </h1>
      <div className="space-y-2 text-white">
        <p>Date: {race.date}</p>
        <p>Shoes: {race.shoes}</p>
      </div>
    </div>
    
  );
}
