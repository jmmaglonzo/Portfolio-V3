import Contact from "../contact/Contact";
import ProjectGrid from "../project/ProjectGrid";
import Experience from "../resume/Experience";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const Navbar = () => {
  return (
    <nav>
      <Tabs defaultValue="Projects" className="w-full">
        <TabsList className="absolute right-0 top-0 bg-secondary">
          <TabsTrigger value="Projects">Projects</TabsTrigger>
          <TabsTrigger value="Resume">Resume</TabsTrigger>
          <TabsTrigger value="Contact">Contact</TabsTrigger>
        </TabsList>
        <TabsContent value="Projects">
          <span className="mb-10 inline-block text-3xl font-bold">
            Projects
          </span>
          <ProjectGrid />
        </TabsContent>
        <TabsContent value="Resume">
          <span className="mb-10 inline-block text-3xl font-bold">
            Experience & Education
          </span>
          <Experience />
        </TabsContent>
        <TabsContent value="Contact">
          <span className="mb-10 inline-block text-3xl font-bold">Contact</span>
          <Contact />
        </TabsContent>
      </Tabs>
    </nav>
  );
};

export default Navbar;
