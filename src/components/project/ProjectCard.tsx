import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { Card, CardContent, CardFooter } from "../ui/card";
import Bradwell from "/public/bradwell.webp";
const ProjectCard = () => {
  return (
    <Card className="border-none">
      <CardContent className="p-2">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={Bradwell}
            alt="Bradwell"
            className="rounded-md object-cover"
            fill
            priority
            sizes="(min-width: 1520px) 289px, (min-width: 1280px) calc(13.64vw + 84px), (min-width: 1040px) calc(33.18vw - 62px), (min-width: 780px) calc(50vw - 72px), calc(100vw - 96px)"
          />
        </AspectRatio>
        <CardFooter className="flex flex-col items-start p-2">
          <span className="text-xs">Web app</span>
          <p className="text-xs">Bradwell Sales & Marketing Corp.</p>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
