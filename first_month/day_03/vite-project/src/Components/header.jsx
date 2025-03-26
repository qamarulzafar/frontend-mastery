import React from 'react';


const Header = () => {
  return (
    <div>
      <header className="">
        <div className="log">
          <h3>Qamar</h3>
        </div>
        <div className="nav">
          <a href="/"><span>Home</span></a> 
          <a href="/about"><span>About</span></a>
          <a href="/courses"><span>Courses</span></a>
          <a href="/contact"><span>Contact</span></a>
        </div>
      </header>
    </div>
  );
}

export default Header;
