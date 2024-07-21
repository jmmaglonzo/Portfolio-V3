import { Separator } from "../ui/separator";
import Profile from "./Profile";
import About from "./About";
import Contact from "./Contact";
const Sidebar = () => {
  return (
    <aside className="hidden h-full max-h-max rounded-md bg-slate-800 px-7 pb-8 pt-16 xl:sticky xl:top-16 xl:block">
      <Profile />
      <Separator decorative className="mt-4 h-[2px] rounded-sm" />
      <About />
      <Contact />
    </aside>
  );
};

export default Sidebar;
