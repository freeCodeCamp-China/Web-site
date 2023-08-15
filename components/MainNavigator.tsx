import { FC } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

import styles from '../styles/MainNavigator.module.less';

export const MainNavigator: FC = () => (
  <Navbar
    className="shadow-sm"
    bg="success"
    data-bs-theme="dark"
    expand="lg"
    sticky="top"
    collapseOnSelect
  >
    <Navbar.Brand href="/" className="ps-2">
      <img alt="logo" src="/freecodecamp_logo.svg" className={styles.logo} />
    </Navbar.Brand>
    <Navbar.Toggle className="border-0 shadow-none" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className={`ms-auto align-items-center ${styles.navBox}`}>
        <Nav.Link
          href="https://www.freecodecamp.org/chinese/learn/"
          target="_blank"
        >
          课程
        </Nav.Link>
        <Nav.Link
          href="https://forum.freecodecamp.org/c/chinese/"
          target="_blank"
        >
          论坛
        </Nav.Link>
        <Nav.Link href="/organiser">志愿者</Nav.Link>
        <Nav.Link href="/conference">会议</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
