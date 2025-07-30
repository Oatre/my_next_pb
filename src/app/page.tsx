"use client";
import { useState } from "react";
import RaceCard from "@/components/RaceCard";
import AddRaceForm from "@/components/AddRaceForm";
import { RaceFormData, Race } from "@/types/race";
import Link from "next/link";
import { races } from "@/data/races";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [userRaces, setUserRaces] = useState<Race[]>([]);

  const handleAddRace = (raceData: RaceFormData) => {
    const raceWithId = {
      ...raceData,
      id: `user-race-${Date.now()}`,
    };
    setUserRaces((prev) => [...prev, raceWithId]);
    setShowForm(false);
    /*console.log("New race:", raceData);*/
    setShowForm(false);
    // Todo: add logic to actually save the race data
    // Form works, displays a RaceCard, however it is not clickable like the static RaceCards.
    // Going into a static RaceCard and back removes the added RaceCard.
  };

  return (
    <main className="min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center text-white mb-8">
        My Next PB
      </h1>

      <div className="flex justify-center mb-6">
        <button
          onClick={() => setShowForm(true)}
          className="bg-teal-800 text-white border border-teal-950 px-4 py-2 rounded shadow hover:opacity-90"
        >
          Add Race
        </button>
      </div>

      {/* Modal for Add Race Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
            <h2 className="text-xl font-bold mb-4">Add New Race</h2>
            <AddRaceForm
              onSubmit={handleAddRace}
              onCancel={() => setShowForm(false)}
            />
          </div>
        </div>
      )}

      {/*Form-added Races*/}
      <section className="max-w-2xl mx-auto space-y-4">
        {userRaces.map((race, index) => (
          <Link
            key={`user-race-${index}`}
            href={`/race/${race.id}`}
            className="block hover:opacity-90"
          >
            <div
              key={`user-race-${index}`}
              className="border-1-4 border-green-400 p1-2"
            >
              <RaceCard
                raceName={race.raceName}
                date={race.date}
                raceDistance={race.raceDistance}
                predictedTime={race.predictedTime}
                actualTime={race.actualTime}
                isPB={race.isPB}
              />
            </div>
          </Link>
        ))}

        {/* Static Races, from races.ts - example data*/}
        {Object.entries(races).map(([slug, race]) => (
          <Link
            key={slug}
            href={`/race/${slug}`}
            className="block hover:opacity-90"
          >
            <RaceCard
              raceName={race.raceName}
              date={race.date}
              raceDistance={race.raceDistance}
              predictedTime={race.predictedTime}
              actualTime={race.actualTime}
            />
          </Link>
        ))}
      </section>
    </main>
  );
}
