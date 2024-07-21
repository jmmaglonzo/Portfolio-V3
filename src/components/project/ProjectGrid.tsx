import ProjectCard from "./ProjectCard";

const ProjectGrid = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
};

export default ProjectGrid;
