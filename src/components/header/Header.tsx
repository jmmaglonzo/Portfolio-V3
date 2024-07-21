import { DarkMode } from "../theme/Darkmode";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      <Logo />
      <DarkMode />
    </header>
  );
};

export default Header;
