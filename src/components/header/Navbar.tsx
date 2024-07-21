import ProjectGrid from "../project/ProjectGrid";
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
          <ProjectGrid />
        </TabsContent>
        <TabsContent value="Resume">Resume</TabsContent>
        <TabsContent value="Contact">Contact</TabsContent>
      </Tabs>
    </nav>
  );
};

export default Navbar;
