import Image from "next/image";
import Link from "next/link";
import { Furniture } from "@/types/furniture";

type FurnitureCardProps = {
  furniture: Furniture;
};

export default function FurnitureCard({ furniture }: FurnitureCardProps) {
  return (
    <Link
      href={`/meubles/${furniture.id}`}
      className="block rounded-2xl border border-slate-700 bg-slate-900 p-6 hover:border-yellow-400 transition hover:border-yellow-300"
    >
      <div className="mb-4 flex justify-center">
  <Image
    src={furniture.image}
    alt={furniture.name}
    width={180}
    height={180}
    className="rounded-lg object-contain"
  />
</div>

      <h2 className="text-2xl font-bold">
        {furniture.name}
      </h2>

      <p className="text-gray-400 mt-2">
        {furniture.category}
      </p>
<p className="text-yellow-400 text-sm mt-1">
  ⭐ {furniture.rarity}
</p>
      <div className="mt-6">
        {furniture.owned ? (
          <span className="text-green-400 font-semibold">
            ✅ Possédé
          </span>
        ) : (
          <span className="text-red-400 font-semibold">
            ⬜ Non possédé
          </span>
        )}
      </div>
    </Link>
  );
}