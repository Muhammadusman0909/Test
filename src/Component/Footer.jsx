import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-8">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Muhammad Usman. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
