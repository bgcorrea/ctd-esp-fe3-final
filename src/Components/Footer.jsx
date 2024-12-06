import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center py-6 bg-white dark:bg-[#121212] dark:text-white w-full h-20 mt-auto">
      <p className="mb-0">Powered by</p>
      <img
        src="/images/DH.png"
        alt="DH-logo"
        className="w-80 filter dark:invert"
      />
    </footer>
  );
};

export default Footer;
