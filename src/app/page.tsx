"use client";
import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  return (
    <main className="min-h-screen p-6">
      {/* Header*/}
      <div className="flex items-center justify-center gap-4 mb-8">
        <h1 className="text-4xl font-bold text-white">My Next PB</h1>

        <div className="relative">
          {/* Button to toggle popup */}
          <button
            onClick={() => setIsAboutOpen(!isAboutOpen)}
            className="bg-teal-800 rounded-2xl px-4 py-2 text-sm text-white font-bold transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-teal-700 hover:duration-300 cursor-pointer"
          >
            About
          </button>
          <ModeToggle/>

          {/*Modal*/}
          {isAboutOpen && (
            <>
              {/* Backdrop overlay with blur */}
              <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={() => setIsAboutOpen(false)}
              />

              {/* Popup centered on screen */}
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white rounded-2xl w-80 text-gray-600 p-6 shadow-xl border">
                  <h3 className="font-bold mb-2 text-xl">About My Next PB</h3>
                  <p className="mb-6">
                    All data is either static or mock at current time. Track
                    your races, show off medals, personal bests and more. Set
                    goals and achieve your next personal best.
                  </p>

                  <button
                    onClick={() => setIsAboutOpen(false)}
                    className="w-full bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-500"
                  >
                    Close
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="max-w-md mx-auto space-y-4">
        <Link href="/races" className="block">
          <div className="bg-teal-800 border border-teal-950 rounded-lg p-6 hover:bg-teal-700 transition-colors">
            <h2 className="text-xl font-bold text-white mb-2">🏃‍♂️ Races</h2>
            <p className="text-teal-100">View and manage your race history</p>
          </div>
        </Link>

        <Link href="/personal-bests" className="block">
          <div className="bg-teal-800 border border-teal-950 rounded-lg p-6 hover:bg-teal-700 transition-colors">
            <h2 className="text-xl font-bold text-white mb-2">
              🏆 Personal Bests (In progress)
            </h2>
            <p className="text-blue-100">Track your fastest times</p>
          </div>
        </Link>

        <Link href="/stats" className="block">
          <div className="bg-teal-800 border border-teal-950 rounded-lg p-6 hover:bg-teal-700 transition-colors">
            <h2 className="text-xl font-bold text-white mb-2">
              📊 Statistics (In progress)
            </h2>
            <p className="text-purple-100">Analyze your running progress</p>
          </div>
        </Link>

        <Link href="/goals" className="block">
          <div className="bg-teal-800 border border-teal-950 rounded-lg p-6 hover:bg-teal-700 transition-colors">
            <h2 className="text-xl font-bold text-white mb-2">
              🎯 Goals (In progress)
            </h2>
            <p className="text-green-100">Set and track your targets</p>
          </div>
        </Link>
      </div>
    </main>
  );
}
