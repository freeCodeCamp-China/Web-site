import React, { useState } from 'react';

export const MainNavigator: React.FC = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);

  const handleToggleClick = () => {
    setIsNavVisible(!isNavVisible);
  };
  return (
    <nav className="clearfix">
      <ul id="nav" className="clearfix">
        <li className="head_logo">
          <a href="https://www.freecodecamp.one">
            <img src="./freecodecamp_logo.svg" className="init" alt="logo" />
          </a>
        </li>
        <li className="nav_bar" style={{ display: isNavVisible ? 'block' : 'none'}}>
          <ul>
            <li><a href="https://learn.freecodecamp.one">课程</a></li>
            <li><a href="https://forum.freecodecamp.one">论坛</a></li>
            <li><a href="https://www.freecodecamp.one/community">社区</a></li>
            <li><a href="https://www.freecodecamp.one/volunteer">志愿者</a></li>
            <li><a href="https://conf.freecodecamp.one">会议</a></li>
          </ul>
        </li>
        <li className="nav_toggle" onClick={handleToggleClick}>
          <img src="./toggle_holder.png" className="init" alt="toggle" />
        </li>
      </ul>
    </nav>
  );
};