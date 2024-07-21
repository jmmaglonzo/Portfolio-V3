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
