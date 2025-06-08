import RaceDetails from "@/components/RaceDetails";

export default async function RacePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main className="min-h-screen p-6">
      <RaceDetails slug={slug} />
    </main>
  );
}
