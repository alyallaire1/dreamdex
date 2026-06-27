import Hero from "../components/Hero";
import CollectionGrid from "../components/CollectionGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <CollectionGrid />
    </main>
  );
}