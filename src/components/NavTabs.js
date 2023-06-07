import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
<div className="navbar bg-base-100">
  <div className="flex-1">
    <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'btn btn-ghost normal-case text-xl text-primary active' : 'btn btn-ghost normal-case text-xl text-primary'}>
      About
    </a>
    <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'btn btn-ghost normal-case text-xl text-info active' : 'btn btn-ghost normal-case text-xl text-info'}>
      Portfolio
    </a>
    <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'btn btn-ghost normal-case text-xl text-secondary active' : 'btn btn-ghost normal-case text-xl text-secondary'}>
      Resume
    </a>
    <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'btn btn-ghost normal-case text-xl text-error active' : 'btn btn-ghost normal-case text-xl text-error'}>
      Contact
    </a>
  </div>
</div>

  );
}


export default NavTabs;
