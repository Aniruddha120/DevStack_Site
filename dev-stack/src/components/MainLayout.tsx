import type { Technology } from "../types";
import Sidebar from "./Sidebar";
import TechList from "./TechList";

interface MainLayoutProps {
  technologies: Technology[];
  stack: Technology[];
  handleAddToStack: (tech: Technology) => void;
  handleRemoveFromStack: (id: string) => void;
  handleRemoveAll: () => void;
}

const MainLayout = ({
  technologies,
  stack,
  handleAddToStack,
  handleRemoveFromStack,
  handleRemoveAll,
}: MainLayoutProps) => {
  return (
    <section
      id="technologies"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Explore the <span className="text-brand-gradient">Technologies</span>
      </h2>
      <p className="mt-3 max-w-xl text-gray-500">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-start">
        <div className="flex-1">
          <TechList
            technologies={technologies}
            stack={stack}
            handleAddToStack={handleAddToStack}
          />
        </div>
        <Sidebar
          stack={stack}
          handleRemoveFromStack={handleRemoveFromStack}
          handleRemoveAll={handleRemoveAll}
        />
      </div>
    </section>
  );
};

export default MainLayout;
