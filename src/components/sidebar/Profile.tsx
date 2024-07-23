import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BadgeShine from "../ui/badgeShine";
const Profile = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-2 xl:flex-col">
      <Avatar className="sm:size-16 xl:size-[100px]">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>JM</AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-center justify-center gap-1">
        <p className="text-xs lg:text-sm xl:text-base">John Mark C. Maglonzo</p>

        <BadgeShine>Frontend Developer</BadgeShine>
      </div>
    </div>
  );
};

export default Profile;
