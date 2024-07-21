import ProjectGrid from "../project/ProjectGrid";
import Experience from "../resume/Experience";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const Navbar = () => {
  return (
    <nav>
      <Tabs defaultValue="Projects" className="w-full">
        <TabsList className="absolute right-0 top-0">
          <TabsTrigger value="Projects">Projects</TabsTrigger>
          <TabsTrigger value="Resume">Resume</TabsTrigger>
          <TabsTrigger value="Contact">Contact</TabsTrigger>
        </TabsList>
        <TabsContent value="Projects">
          <span className="text-3xl font-bold">Projects</span>

          <ProjectGrid />
        </TabsContent>
        <TabsContent value="Resume">
          <span className="mb-12 inline-block text-3xl font-bold">
            Experience & Education
          </span>
          <Experience />
        </TabsContent>
        <TabsContent value="Contact">Contact</TabsContent>
      </Tabs>
    </nav>
  );
};

export default Navbar;
