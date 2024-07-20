import { MdAlternateEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SidebarType } from "@/types/sidebar";

const sideBar: SidebarType[] = [
  {
    icon: <MdAlternateEmail size={22} />,
    title: "EMAIL",
    value: "johnmaglonzo@gmail.com",
    link: "mailto:johnmaglonzo@gmail.com",
  },
  {
    icon: <IoPhonePortraitOutline size={22} />,
    title: "PHONE",
    value: "+(63) 9126-532-546",
    link: "tel:+639126532546",
  },

  {
    icon: <FaLinkedin size={22} />,
    title: "LinkedIn",
    value: "John Mark Maglonzo",
    link: "https://www.linkedin.com/in/jmmaglonzo/",
  },
  {
    icon: <FaGithub size={22} />,
    title: "Github",
    value: "jmmaglonzo",
    link: "https://github.com/jmmaglonzo",
  },
  {
    icon: <FaLocationDot size={22} />,
    title: "LOCATION",
    value: "Quezon City",
  },
];

export default sideBar;
