import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-white bg-[#121212]">
      {" "}
      {/* Added background color for consistency */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 flex flex-col sm:flex-row justify-between items-center">
        <span>ryanmonahanjr&#169;</span>
        <p className="text-slate-600 mt-4 sm:mt-0">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
