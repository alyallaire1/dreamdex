import FurnitureCard from "@/components/FurnitureCard";
import { furniture } from "@/data/furniture";

export default function MeublesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-5xl font-bold text-yellow-300">
        🪑 Meubles
      </h1>

      <p className="text-gray-400 mt-2 mb-10">
        Tous les meubles de Disney Dreamlight Valley.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {furniture.map((item) => (
          <FurnitureCard
            key={item.id}
            furniture={item}
          />
        ))}
      </div>

    </main>
  );
}