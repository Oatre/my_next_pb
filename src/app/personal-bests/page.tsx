"use client";
import Link from "next/link";
import BackButton from "@/components/backButton";
import { useState } from "react";
import { races } from "@/data/races";
import { secondsToTimeString } from "@/utils/timeUtils";

import Image from "next/image";
import duckOne from "@/assets/rubbermeme1.jpg";
import duckTwo from "@/assets/rubbermeme2.jpg";
import duckThree from "@/assets/rubbermeme3.jpg";
import duckFour from "@/assets/rubbermeme4.jpg";

export default function PersonalBestsPage() {
  // Extract personal bests from races data
  const personalBests = [
    {
      distance: "5K",
      time: secondsToTimeString(races["5k-parkrun"].actualTime),
      date: races["5k-parkrun"].date,
      race: races["5k-parkrun"].raceName,
    },
    {
      distance: "10K",
      time: secondsToTimeString(races["10k-spring-dash"].actualTime),
      date: races["10k-spring-dash"].date,
      race: races["10k-spring-dash"].raceName,
    },
    {
      distance: "Half Marathon",
      time: secondsToTimeString(races["oslo-21k"].actualTime),
      date: races["oslo-21k"].date,
      race: races["oslo-21k"].raceName,
    },
    {
      distance: "Marathon",
      time: secondsToTimeString(races["trondheim-42k"].actualTime),
      date: races["trondheim-42k"].date,
      race: races["trondheim-42k"].raceName,
    },
  ];
  const [selectedDistance, setSelectedDistance] = useState("5K");

  // Distance options
  const distances = [
    { key: "5K", label: "5K", km: "5km" },
    { key: "10K", label: "10K", km: "10km" },
    { key: "21K", label: "21K", km: "21km (Half)" },
    { key: "42K", label: "42K", km: "42km (Marathon)" },
  ];

  return (
    <main className="min-h-screen p-6">
      {/* Header with back button */}
      <div className="max-w-2xl mx-auto mb-6">
        <div className="flex items-center justify-between">
          <BackButton />
      
          <h1 className="text-2xl font-bold text-center text-white mb-6">
            🏆 Your Personal Bests
          </h1>
          <div className="w-16"></div> {/* Spacer for balance */}
        </div>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {/* Personal Bests List */}
        {personalBests.map((pb, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-yellow-600 to-yellow-500 border border-yellow-800 rounded-lg p-4 shadow-sm"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                🥇 {pb.distance}
              </h3>
              <span className="text-xl font-bold text-white">{pb.time}</span>
            </div>

            <div className="text-sm text-yellow-100 space-y-1">
              <p>
                📅 Set on: <strong>{pb.date}</strong>
              </p>
              <p>
                🏃 Race: <strong>{pb.race}</strong>
              </p>
            </div>
          </div>
        ))}

        {/* Distance Selection Buttons */}
        <div className="grid grid-cols-4 gap-2 mt-8">
          {distances.map((distance) => (
            <button
              key={distance.key}
              onClick={() => setSelectedDistance(distance.key)}
              className={`px-3 py-2 rounded font-bold transition-colors ${
                selectedDistance === distance.key
                  ? "bg-gradient-to-r from-yellow-600 to-yellow-500 border-2 border-teal-950 text-white "
                  : "bg-teal-800 border border-teal-950 text-white hover:bg-teal-700 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:duration-300 cursor-pointer"
              }`}
            >
              {distance.label}
            </button>
          ))}
        </div>

        {/* Graph/Display Section */}
        <div className="bg-teal-800 border border-teal-950 rounded-lg p-6 text-center">
          <h3 className="text-white font-bold mb-3">
            📊 {selectedDistance} Progress Graph (WIP)
          </h3>
          <p className="text-white mb-4">
            Showing progress for{" "}
            {distances.find((d) => d.key === selectedDistance)?.km}
          </p>

          {/* Rest of your duck images code stays the same */}
          <div className="bg-white rounded p-4">
            <div className="flex justify-center">
              {selectedDistance === "5K" && (
                <Image
                  src={duckOne}
                  alt="5K Duck"
                  className="w-32 h-32 object-cover rounded"
                />
              )}
              {selectedDistance === "10K" && (
                <Image
                  src={duckTwo}
                  alt="10K Duck"
                  className="w-32 h-32 object-cover rounded"
                />
              )}
              {selectedDistance === "21K" && (
                <Image
                  src={duckThree}
                  alt="21K Duck"
                  className="w-32 h-32 object-cover rounded"
                />
              )}
              {selectedDistance === "42K" && (
                <Image
                  src={duckFour}
                  alt="42K Duck"
                  className="w-32 h-32 object-cover rounded"
                />
              )}
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Link href="/races" className="block">
            <div className="bg-teal-800 border border-teal-950 rounded-lg p-4 text-center hover:bg-teal-700 transition-colors">
              <p className="text-white font-bold">📊 View All Races</p>
            </div>
          </Link>

          <Link href="/stats" className="block">
            <div className="bg-teal-800 border border-teal-950 rounded-lg p-4 text-center hover:bg-teal-700 transition-colors">
              <p className="text-white font-bold">📈 Statistics</p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
