import type { Technology } from "../types";

interface TechCardProps {
  tech: Technology;
  isAdded: boolean;
  onAdd: (tech: Technology) => void;
}

const badgeStyles: Record<string, string> = {
  Frontend: "bg-sky-50 text-sky-700",
  Backend: "bg-emerald-50 text-emerald-700",
  Database: "bg-blue-50 text-blue-700",
  Language: "bg-amber-50 text-amber-700",
  Styling: "bg-pink-50 text-pink-700",
  DevOps: "bg-violet-50 text-violet-700",
  Tools: "bg-slate-100 text-slate-700",
};

const TechCard = ({ tech, isAdded, onAdd }: TechCardProps) => {
  return (
    <article className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <img
          src={tech.icon}
          alt={tech.name}
          className="h-12 w-12 object-contain"
        />
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            badgeStyles[tech.category] ?? "bg-gray-100 text-gray-600"
          }`}
        >
          {tech.badge}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-bold text-gray-900">{tech.name}</h3>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">
        {tech.description}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
        <span className="font-medium text-gray-600">{tech.category}</span>
        <span className="text-gray-400">{tech.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 font-semibold text-gray-700">
          <span className="text-amber-400">★</span>
          {tech.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`mt-5 w-full rounded-xl py-2.5 text-sm font-semibold transition ${
          isAdded
            ? "cursor-not-allowed bg-gray-100 text-gray-400"
            : "brand-gradient text-white shadow-sm hover:opacity-90"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
};

export default TechCard;
