import Image, { StaticImageData } from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { Card, CardContent, CardFooter } from "../ui/card";
interface ProjectCardProps {
  data: {
    name: string;
    image: StaticImageData;
    link: string;
  };
}

const ProjectCard = ({ data: { name, image, link } }: ProjectCardProps) => {
  return (
    <Card className="cursor-pointer border-none duration-200 ease-in-out xl:hover:scale-110">
      <CardContent className="p-2">
        <a href={link} target="_blank">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={image}
              alt="Bradwell"
              className="rounded-md object-cover"
              fill
              priority
              sizes="(min-width: 1520px) 289px, (min-width: 1280px) calc(13.64vw + 84px), (min-width: 1040px) calc(33.18vw - 62px), (min-width: 780px) calc(50vw - 72px), calc(100vw - 96px)"
            />
          </AspectRatio>
        </a>
        <CardFooter className="flex flex-col items-start p-2">
          <span className="text-xs">Web app</span>
          <p className="text-xs">{name}.</p>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
