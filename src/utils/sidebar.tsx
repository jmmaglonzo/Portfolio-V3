import { MdAlternateEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SidebarType } from "@/types/sidebar";

const sideBar: SidebarType[] = [
  {
    icon: <MdAlternateEmail className="size-5 lg:size-6" />,
    title: "Email",
    value: "johnmaglonzo@gmail.com",
    link: "mailto:johnmaglonzo@gmail.com",
  },
  {
    icon: <IoPhonePortraitOutline className="size-5 lg:size-6" />,
    title: "Phone",
    value: "+(63) 9126-532-546",
    link: "tel:+639126532546",
  },

  {
    icon: <FaLinkedin className="size-5 lg:size-6" />,
    title: "LinkedIn",
    value: "John Mark Maglonzo",
    link: "https://www.linkedin.com/in/jmmaglonzo/",
  },
  {
    icon: <FaGithub className="size-5 lg:size-6" />,
    title: "Github",
    value: "jmmaglonzo",
    link: "https://github.com/jmmaglonzo",
  },
  {
    icon: <FaLocationDot className="size-5 lg:size-6" />,
    title: "Location",
    value: "Quezon City",
  },
];

export default sideBar;
