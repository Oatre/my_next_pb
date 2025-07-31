"use client";
import { useState } from "react";
import { races } from "@/data/races";
import { secondsToTimeString } from "@/utils/timeUtils";
import BackButton from "./backButton";

export default function RaceDetails(props: { slug: string }) {
  const race = races[props.slug as keyof typeof races];
  const [notes, setNotes] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  if (!race) {
    return <div>Race not found</div>;
  }

  return (
    <div>
      {/* Header*/}
      <div className="max-w-2x3 mx-auto mb-6">
        <div className="flex items-center justify-between">
          <BackButton />
          <h1 className="text-lg font-bold text-white flex-1 text-center">
            Race Details for {race.raceName}
          </h1>
          <p className="text-lg font-bold text-white flex-1 text-center absolute inset-x-0 top-12">
            <strong>{race.date}</strong>
          </p>
        </div>
      </div>
      {/* Empty div for positioning, will fix positioning in another way later when the component is more fleshed out */}
      <div className="h-10"></div>

      <section className="max-w-2xl mx-auto space-y-4">
        {/*Details Section*/}
        <div className="space-y-2 text-white">
          <p>Distance: {race.raceDistance} km</p>
          <p>
            Goal Time:{" "}
            {race.predictedTime > 0
              ? secondsToTimeString(race.predictedTime)
              : "Not set"}
          </p>
          <p>
            Actual Time:{" "}
            {race.actualTime > 0
              ? secondsToTimeString(race.actualTime)
              : "Not set"}
          </p>
          <p>Shoes: {race.shoes}</p>
        </div>
        {/* Empty div for positioning, will fix positioning in another way later when the component is more fleshed out */}
        <div className="h-30"></div>
        {/* Notes Section */}
        <div>
          <h3 className="text-white font-bold mb-3 ">
            📝Jot down race details
          </h3>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="How did the race feel? Weather conditions? What went well? What to improve next time..."
            className="w-full h-32 p-3 border rounded resize-none bg-slate-100 text-black font-bold"
            rows={6}
          />
        </div>
      </section>
    </div>
  );
}
