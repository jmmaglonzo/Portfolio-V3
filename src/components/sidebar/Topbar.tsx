import { Separator } from "../ui/separator";
import About from "./About";
import Contact from "./Contact";
import Profile from "./Profile";

const Topbar = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between rounded-xl bg-slate-900 p-4 md:flex-row md:gap-4 xl:hidden">
      <Profile />
      <Separator
        orientation="vertical"
        className="hidden h-36 w-[2px] md:block"
      />
      <About />
      <Separator
        orientation="vertical"
        className="hidden h-36 w-[2px] md:block"
      />
      <Contact />
    </div>
  );
};

export default Topbar;
