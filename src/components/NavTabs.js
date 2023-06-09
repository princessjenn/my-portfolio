import React from 'react';
import { TiUserOutline } from "react-icons/ti";
import { TiPointOfInterest } from "react-icons/ti";
import { TiEyeOutline } from "react-icons/ti";
import { TiPencil } from "react-icons/ti";





function NavTabs({ currentPage, handlePageChange }) {
  return (
<div className="navbar flex bg-transparent fixed top-0 z-50">
<div className="container flex w-1/3 rounded-lg bg-neutral bg-opacity-50">

    <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'btn btn-ghost normal-case text-xl text-primary active' : 'btn btn-ghost normal-case text-xl text-primary'}>
      <TiUserOutline className="inline-block mr-2" /> 
      About
    </a>
    <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'btn btn-ghost normal-case text-xl text-info active' : 'btn btn-ghost normal-case text-xl text-info'}>
      <TiPointOfInterest className="inline-block mr-2" />
      Portfolio
    </a>
    <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'btn btn-ghost normal-case text-xl text-secondary active' : 'btn btn-ghost normal-case text-xl text-secondary'}>
      <TiEyeOutline className="inline-block mr-2" /> 
      Resume
    </a>
    <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'btn btn-ghost normal-case text-xl text-error active' : 'btn btn-ghost normal-case text-xl text-error'}>
      <TiPencil className="inline-block mr-2" /> 
      Contact
    </a>
</div>
</div>

  );
}


export default NavTabs;
