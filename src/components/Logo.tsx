import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = () => {
  return (
    <div
      className={`flex items-center p-4 pl-0 cursor-pointer italic underline `}
    >
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-primary m-0">KudosCraft</h1>
      </div>
    </div>
  );
};

export default Logo;
