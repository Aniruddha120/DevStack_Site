import type { Technology } from "../types";
import TechList from "./TechList";

interface MainLayoutProps {
  technologies: Technology[];
}

const MainLayout = ({ technologies }: MainLayoutProps) => {
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

      <div className="mt-10">
        <TechList technologies={technologies} />
      </div>
    </section>
  );
};

export default MainLayout;
