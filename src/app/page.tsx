"use client";
import { useState } from "react";
import RaceCard from "@/components/RaceCard";
import AddRaceForm from "@/components/AddRaceForm";
import Link from "next/link";
import { races } from "@/data/races";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  const handleAddRace = (raceData: any) => {
    console.log("New race:", raceData);
    setShowForm(false);
    // Todo: add logic to actually save the race data
  };

  return (
    <main className="min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center text-white mb-8">
        My Next PB
      </h1>

      <div className="flex justify-center mb-6">
        <button
          onClick={() => setShowForm(true)}
          className="bg-gray-500 text-white px-4 py-2 rounded shadow hover:bg-gray-600"
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

      <section className="max-w-2xl mx-auto space-y-4">
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
              isPB={race.isPB}
            />
          </Link>
        ))}
      </section>
    </main>
  );
}
