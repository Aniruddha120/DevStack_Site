import type { Technology } from "../types";
import TechCard from "./TechCard";

interface TechListProps {
  technologies: Technology[];
  stack: Technology[];
  handleAddToStack: (tech: Technology) => void;
}

const TechList = ({
  technologies,
  stack,
  handleAddToStack,
}: TechListProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {technologies.map((tech) => (
        <TechCard
          key={tech.id}
          tech={tech}
          isAdded={stack.some((item) => item.id === tech.id)}
          onAdd={handleAddToStack}
        />
      ))}
    </div>
  );
};

export default TechList;
