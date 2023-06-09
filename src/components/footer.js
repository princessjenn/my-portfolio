import React from 'react';
import Heart from "react-animated-heart";
import { useState } from "react";

const Footer = () => {
  const [isClick, setClick] = useState(false);
    return (

<footer className="footer footer-center p-4 bg-transparent text-base-content">
  <div className="flex items-center justify-center">
    <p className="flex items-center">
      Made with{' '}
      <span className="inline-flex items-center">
        <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
      </span>{' '}
      by Jennifer Eckenrode - &copy; 2023
    </p>
  </div>
</footer>
 )
};

export default Footer;