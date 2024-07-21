import { Separator } from "../ui/separator";
import Skills from "./Skills";
import Timeline from "./Timeline";
const Experience = () => {
  return (
    <>
      <Timeline />
      <Separator className="mt-6 h-[2px] rounded-full" />
      <Skills />
    </>
  );
};

export default Experience;
