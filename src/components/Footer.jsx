import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 border-t border-white/20">
      <div className="max-w-6xl mx-auto px-4 py-10 flex justify-center">
        <p className="text-sm text-center">
          © {new Date().getFullYear()} Kalgiswar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
