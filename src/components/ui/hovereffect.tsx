import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { CardContent, CardFooter } from "./card";
import Image, { StaticImageData } from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description?: string;
    image: StaticImageData;
    link: string;
    stack: string[];
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          target="_blank"
          className={`group relative block w-full p-2 ${idx === 3 && "lg:col-span-2"} ${idx === 4 && "h-fit"}`}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-3xl bg-[#161925] dark:bg-[#e2e2e2]"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardContent className="p-1">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={item.image}
                  alt={item.title}
                  className={`rounded-tl-xl rounded-tr-xl ${idx === 3 ? "object-contain" : "object-cover"}`}
                  fill
                  priority
                />
              </AspectRatio>
              <CardFooter className="mt-4 flex flex-col items-start gap-1 p-0 text-black dark:text-white">
                <p className="text-sm font-medium">{item.title}</p>
                <div className="flex flex-wrap items-center gap-1">
                  {item.stack.map((el, i) => (
                    <span className="text-[10px] font-semibold" key={i}>
                      {el}
                    </span>
                  ))}
                </div>
              </CardFooter>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative z-20 h-full w-full overflow-hidden rounded-2xl bg-[#e2e2e2] dark:bg-[#161925]",
        className,
      )}
    >
      <div className="relative z-50">
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("mt-4 font-bold tracking-wide text-zinc-100", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-sm leading-relaxed tracking-wide text-zinc-400",
        className,
      )}
    >
      {children}
    </p>
  );
};
