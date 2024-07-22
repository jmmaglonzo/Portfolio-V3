import ProjectCard from "./ProjectCard";
import cards from "@/utils/cards";
const ProjectGrid = () => {
  return (
    <div className="grid gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((c) => (
        <ProjectCard key={c.name} data={c} />
      ))}
    </div>
  );
};

export default ProjectGrid;
