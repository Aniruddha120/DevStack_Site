import { FiX } from "react-icons/fi";
import type { Technology } from "../types";

interface SidebarProps {
  stack: Technology[];
  handleRemoveFromStack: (id: string) => void;
  handleRemoveAll: () => void;
}

const Sidebar = ({
  stack,
  handleRemoveFromStack,
  handleRemoveAll,
}: SidebarProps) => {
  return (
    <aside className="lg:w-80 lg:shrink-0">
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:sticky lg:top-24">
        <h3 className="text-lg font-bold text-gray-900">Your Stack</h3>
        <p className="mt-1 text-sm text-gray-500">
          {stack.length} {stack.length === 1 ? "Technology" : "Technologies"}{" "}
          Selected
        </p>

        {stack.length === 0 ? (
          <p className="mt-6 rounded-xl bg-gray-50 py-10 text-center text-sm text-gray-400">
            Your stack is empty.
          </p>
        ) : (
          <>
            <ul className="mt-5 space-y-3">
              {stack.map((tech) => (
                <li
                  key={tech.id}
                  className="flex items-center gap-3 rounded-xl border border-gray-100 p-3"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-9 w-9 object-contain"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-gray-800">
                      {tech.name}
                    </p>
                    <p className="truncate text-xs text-gray-400">
                      {tech.category}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRemoveFromStack(tech.id)}
                    aria-label={`Remove ${tech.name}`}
                    className="text-gray-400 transition hover:text-red-500"
                  >
                    <FiX size={18} />
                  </button>
                </li>
              ))}
            </ul>

            <button
              onClick={handleRemoveAll}
              className="mt-5 w-full rounded-xl border border-red-200 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-50"
            >
              Remove All
            </button>
          </>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
