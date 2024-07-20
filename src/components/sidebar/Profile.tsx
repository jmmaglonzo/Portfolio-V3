import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "../ui/badge";
const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Avatar className="h-[100px] w-[100px]">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <p>John Mark C. Maglonzo</p>
      <Badge>FRONTEND DEVELOPER</Badge>
    </div>
  );
};

export default Profile;
