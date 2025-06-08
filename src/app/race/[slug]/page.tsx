import RaceDetails from "@/components/RaceDetails";

export default function RacePage({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen p-6">
      <RaceDetails slug={params.slug} />
    </main>
  );
}
