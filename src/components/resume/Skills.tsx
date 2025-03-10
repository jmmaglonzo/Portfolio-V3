import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import icons from "@/utils/skills";

const Skills = () => {
  return (
    <>
      <span className="my-4 inline-block text-3xl font-bold">Skills</span>
      <div className="flex flex-wrap items-center gap-3">
        {icons.map((i) => (
          <div
            className="flex items-center gap-4 rounded-[6px] bg-[#161925] px-4 py-2 text-white dark:bg-[#e2e2e2] dark:text-black"
            key={i.name}
          >
            <div className="size-6">
              <AspectRatio ratio={1 / 1} className="size-full">
                <Image
                  src={i.icon}
                  alt="Icons"
                  fill
                  className="object-contain"
                  sizes="24px"
                />
              </AspectRatio>
            </div>
            <span className="hidden text-xs font-semibold lg:inline-block">
              {i.name}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
