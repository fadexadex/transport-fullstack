import React, { useState } from 'react';

const NavBar = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const sidebarClass = `side-nav ${isExpanded ? 'expanded' : ''}`;

  return (
    <div className={sidebarClass}>
      <button onClick={toggleSidebar} className="toggle-btn">
      </button>
      <nav>{children}</nav>
    </div>
  );
};

export default NavBar;
