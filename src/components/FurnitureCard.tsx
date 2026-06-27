import { Furniture } from "@/types/furniture";

type FurnitureCardProps = {
  furniture: Furniture;
};

export default function FurnitureCard({ furniture }: FurnitureCardProps) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
      <h2 className="text-2xl font-bold">{furniture.name}</h2>

      <p className="mt-2 text-gray-400">
        {furniture.category}
      </p>

      <div className="mt-4">
        {furniture.owned ? "✅ Possédé" : "⬜ Non possédé"}
      </div>
    </div>
  );
}