import Navigation from './Navigation';
import UserAvatar from './UserAvatar';

const Header = () => {
  return (
    <header className="max-h-[80px] w-[80%] mx-auto flex flex-row justify-between items-center">
      <Navigation />
      <UserAvatar fallback="JN" />
    </header>
  );
};

export default Header;
