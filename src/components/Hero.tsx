export default function Hero() {
  return (
    <section className="text-center py-20">
      <h1 className="text-6xl font-bold text-yellow-300">
        ✨ DreamDex
      </h1>

      <p className="mt-6 text-2xl text-white">
        Track every item.
        <br />
        Complete every collection.
      </p>

      <div className="mt-10 flex justify-center gap-4">
        <button className="rounded-xl bg-blue-600 px-6 py-3 hover:bg-blue-500">
          📦 Explorer les collections
        </button>

        <button className="rounded-xl border border-white px-6 py-3 hover:bg-white hover:text-black">
          👤 Connexion
        </button>
      </div>
    </section>
  );
}