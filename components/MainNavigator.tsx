import React, { FC, useState } from 'react';

import styles from './MainNavigator.module.less';

export const MainNavigator: FC = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);

  const handleToggleClick = () => setIsNavVisible(!isNavVisible);

  return (
    <nav className={`${styles.navigator} clearfix`}>
      <ul className="clearfix">
        <li className={styles.head_logo}>
          <a href=".">
            <img alt="logo" src="./freecodecamp_logo.svg" />
          </a>
        </li>
        <li className={styles.nav_bar} hidden={!isNavVisible}>
          <ul>
            <li>
              <a href="https://www.freecodecamp.org/chinese/learn/">课程</a>
            </li>
            <li>
              <a href="https://forum.freecodecamp.org/c/chinese/">论坛</a>
            </li>
            <li>
              <a href=".">社区</a>
            </li>
            <li>
              <a href=".">志愿者</a>
            </li>
            <li>
              <a href=".">会议</a>
            </li>
          </ul>
        </li>
        <li className={styles.nav_toggle} onClick={handleToggleClick}>
          <img src="./toggle_holder.png" alt="toggle" />
        </li>
      </ul>
    </nav>
  );
};
