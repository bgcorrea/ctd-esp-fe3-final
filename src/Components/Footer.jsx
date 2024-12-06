import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center py-6 text-red-500 w-full h-20 mt-auto contrast-50">
      <p className="mb-0">Powered by</p>
      <img
        src="/images/DH.png"
        alt="DH-logo"
        className="w-80 filter dark:invert brightness-125 contrast-50"
      />
    </footer>
  );
};

export default Footer;
