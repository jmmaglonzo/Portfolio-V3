import { Separator } from "../ui/separator";
import Profile from "./Profile";
import About from "./About";
import Contact from "./Contact";
const Sidebar = () => {
  return (
    <>
      <Profile />
      <Separator decorative className="mt-4 h-[2px] rounded-sm" />
      <About />
      <Contact />
    </>
  );
};

export default Sidebar;
