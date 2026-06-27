import Link from "next/link";
export default function CollectionGrid() {
  return (
    <section className="mt-20 w-full max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">
        📦 Collections
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
<Link href="/meubles">
  <div className="rounded-2xl bg-slate-900 p-6 border border-slate-700 hover:border-yellow-300 transition cursor-pointer">

    <h3 className="text-2xl">
      🪑 Meubles
    </h3>

    <p className="text-gray-400 mt-2">
      Tous les meubles du jeu.
    </p>

  </div>
</Link>
       

        <div className="rounded-2xl bg-slate-900 p-6 border border-slate-700 hover:border-yellow-300 transition">
          <h3 className="text-2xl">👕 Vêtements</h3>
          <p className="text-gray-400 mt-2">
            Toutes les tenues.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-900 p-6 border border-slate-700 hover:border-yellow-300 transition">
          <h3 className="text-2xl">🐾 Compagnons</h3>
          <p className="text-gray-400 mt-2">
            Tous les compagnons.
          </p>
        </div>

      </div>
    </section>
  );
}