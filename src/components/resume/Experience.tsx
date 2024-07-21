import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import Timeline from "./Timeline";
import icons from "@/utils/skills";
const Experience = () => {
  return (
    <div>
      <Timeline />
      <span className="my-4 inline-block text-3xl font-bold">Skills</span>
      <div className="flex flex-wrap items-center gap-3">
        {icons.map((i) => (
          <div className="size-12 rounded-sm bg-white p-1" key={i.name}>
            <AspectRatio ratio={1 / 1} className="size-full">
              <Image
                src={i.icon}
                alt="Icons"
                fill
                className="object-contain"
                sizes="50px"
              />
            </AspectRatio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
