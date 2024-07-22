import { Separator } from "../ui/separator";
import Profile from "./Profile";
import About from "./About";
import SidebarInfo from "./SidebarInfo";
const Sidebar = () => {
  return (
    <aside className="hidden h-full max-h-max rounded-md bg-secondary px-4 pb-8 pt-16 xl:sticky xl:top-20 xl:block">
      <Profile />
      <Separator decorative className="mt-4 h-[2px] rounded-sm" />
      <About />
      <SidebarInfo />
    </aside>
  );
};

export default Sidebar;
