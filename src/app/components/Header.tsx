import Navigation from './Navigation';
import UserAvatar from './UserAvatar';

const Header = () => {
  return (
    <header className="w-full md:w-[80%] max-h-[80px] mx-auto flex flex-row justify-between items-center">
      <Navigation />
      <UserAvatar fallback="JN" />
    </header>
  );
};

export default Header;
