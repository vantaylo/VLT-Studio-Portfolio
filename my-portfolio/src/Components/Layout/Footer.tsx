import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-transparent text-white py-10 text-center relative z-10">
        <p>© {new Date().getFullYear()} Vanessa Taylor</p>
      </footer>
    </div>
  );
};

export default Footer;
