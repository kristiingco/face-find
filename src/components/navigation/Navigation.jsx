import React from "react";
import Logo from "../logo/Logo";

const Navigation = () => {
  return (
    <nav className="flex flex-col items-center justify-start">
      <Logo />
      <div className="flex space-x-4 font-medium text-xl">
        <span className="hover:text-french-violet">Portfolio</span>
        <span className="hover:text-french-violet">Github</span>
      </div>
    </nav>
  );
};

export default Navigation;
