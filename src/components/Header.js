import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Advanced Financial Data Analysis</h1>

        <nav className="header-nav">
          {/* <button className="nav-button">Dashboard</button> */}
          {/* <button className="nav-button">Comparison</button> */}
          {/* <button className="nav-button">Export Data</button> */}
        </nav>

        <button className="logout-button">Logout</button>
      </div>
    </header>
  );
};

export default Header;
