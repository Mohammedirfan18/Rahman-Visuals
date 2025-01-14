import React from 'react';

const Footer = () => (
  <footer className="bg-black text-xl font-bold text-white text-center py-4">
    <p className="text-sm">
      &copy; 2025 Developed by{' '}
      <a
        href="https://mohammedirfan.in/"
        className="bg-gradient-to-r from-green-600 to-teal-400 text-transparent bg-clip-text hover:from-teal-400 hover:to-green-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mohammed Irfan
      </a>
      . All Rights Reserved.
    </p>
  </footer>
);

export default Footer;
