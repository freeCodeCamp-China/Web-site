import { FC, useState } from 'react';
import { Nav,Navbar } from 'react-bootstrap';

import styles from './MainNavigator.module.less';

export const MainNavigator: FC = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);

  return (
    <Navbar expand="lg" bg="success" data-bs-theme="dark" className="shadow-sm">
      <Navbar.Brand href="#">
        <img alt="logo" src="./freecodecamp_logo.svg" />
      </Navbar.Brand>
      <Navbar.Toggle className={styles.nav_toggle} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto align-items-center">
          <Nav.Link
            className="link-light"
            href="https://www.freecodecamp.org/chinese/learn/"
          >
            课程
          </Nav.Link>
          <Nav.Link
            className="link-light"
            href="https://forum.freecodecamp.org/c/chinese/"
          >
            论坛
          </Nav.Link>
          <Nav.Link className="link-light" href="#">
            社区
          </Nav.Link>
          <Nav.Link className="link-light" href="#">
            志愿者
          </Nav.Link>
          <Nav.Link className="link-light" href="/conference">
            会议
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
