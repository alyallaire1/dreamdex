import Image from "next/image";
import { furniture } from "@/data/furniture";
type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function FurniturePage({ params }: Props) {
  const { id } = await params;

  const meuble = furniture.find(
  (item) => item.id === Number(id)
);
  return (
    
    <main className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-5xl font-bold text-yellow-300">
        🪑 {meuble?.name}
      </h1>

      <p className="mt-4 text-gray-400">
        Cette page affichera bientôt toutes les informations de ce meuble.
      </p>
    </main>
  );
}