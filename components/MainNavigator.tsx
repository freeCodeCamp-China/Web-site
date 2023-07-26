import { FC, useState } from 'react';
import Nav from 'react-bootstrap/Nav';

import styles from './MainNavigator.module.less';

export const MainNavigator: FC = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);

  const handleToggleClick = () => setIsNavVisible(!isNavVisible);

  return (
    <Nav className={`${styles.navigator} clearfix`}>
      <Nav as="ul" className="clearfix">
        <Nav.Item as="li" className={styles.head_logo}>
          <Nav.Link href=".">
            <img alt="logo" src="./freecodecamp_logo.svg" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li" className={styles.nav_bar} hidden={!isNavVisible}>
          <Nav as="ul">
            <Nav.Item as="li">
              <Nav.Link href="https://www.freecodecamp.org/chinese/learn/">
                课程
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="https://forum.freecodecamp.org/c/chinese/">
                论坛
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href=".">社区</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href=".">志愿者</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href=".">会议</Nav.Link>
            </Nav.Item>
          </Nav>
        </Nav.Item>
        <Nav.Item
          as="li"
          className={styles.nav_toggle}
          onClick={handleToggleClick}
        >
          <img src="./toggle_holder.png" alt="toggle" />
        </Nav.Item>
      </Nav>
    </Nav>
  );
};
