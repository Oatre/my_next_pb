import RaceCard from "@/components/RaceCard";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center text-white mb-8">
        My Next PB
      </h1>

      <div className="flex justify-center mb-6">
        <button className="bg-gray-500 text-white px-4 py-2 rounded shadow hover:bg-gray-600">
          Add Race
        </button>
      </div>

      <section className="max-w-2xl mx-auto space-y-4">
        <Link href="/race/5k-parkrun" className="block hover:opacity-90">
          <RaceCard
            raceName="5K Parkrun"
            date="2025-06-01"
            predictedTime="22:30"
            actualTime="21:45"
            isPB={true}
          />
        </Link>

        <Link href="/race/10k-spring-dash" className="block hover:opacity-90">
          <RaceCard
            raceName="10K Spring Dash"
            date="2025-04-15"
            predictedTime="52:00"
            actualTime="54:10"
            isPB={false}
          />
        </Link>
      </section>
    </main>
  );
}