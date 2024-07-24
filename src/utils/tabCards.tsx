import Contact from "@/components/contact/Contact";
import ProjectGrid from "@/components/project/ProjectGrid";
import Experience from "@/components/resume/Experience";

const tabs = [
  {
    title: "Projects",
    value: "projects",
    content: (
      <div className="no-visible-scrollbar relative h-full overflow-hidden overflow-y-scroll rounded-xl bg-secondary p-4 font-bold text-primary md:p-6">
        <p className="mb-8 text-base md:text-3xl">Projects</p>
        <ProjectGrid />
      </div>
    ),
  },
  {
    title: "Experience",
    value: "experience",
    content: (
      <div className="no-visible-scrollbar relative h-full overflow-y-scroll rounded-xl bg-secondary p-4 font-bold text-primary md:p-6">
        <p className="mb-8 text-base md:text-3xl">Experience and Skills </p>
        <Experience />
      </div>
    ),
  },
  {
    title: "Contact",
    value: "contact",
    content: (
      <div className="no-visible-scrollbar relative h-full overflow-hidden overflow-y-scroll rounded-xl bg-secondary p-4 font-bold text-primary md:p-6">
        <p className="mb-8 text-base md:text-3xl">Get in Touch!</p>
        <Contact />
      </div>
    ),
  },
];

export default tabs;
