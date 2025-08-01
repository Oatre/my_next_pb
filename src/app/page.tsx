"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center text-white mb-8">
        My Next PB
      </h1>

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
