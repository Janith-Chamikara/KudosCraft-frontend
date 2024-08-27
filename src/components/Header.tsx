import { MobileNavigation } from './MobileNavigation';
import MainNavigation from './MainNavigation';
import UserAvatar from './UserAvatar';

const Header = () => {
  return (
    <header className="z-50 w-full md:w-[80%] max-h-[80px] mx-auto flex flex-row justify-between items-center">
      <MainNavigation />
      <MobileNavigation />
      <UserAvatar fallback="JN" />
    </header>
  );
};

export default Header;
