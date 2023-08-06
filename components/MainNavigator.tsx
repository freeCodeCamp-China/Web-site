import { FC } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export const MainNavigator: FC = () => {
  return (
    <Navbar expand="lg" bg="success" data-bs-theme="dark" className="shadow-sm">
      <Navbar.Brand href="#">
        <img alt="logo" src={`./freecodecamp_logo.svg`} />
      </Navbar.Brand>
      <Navbar.Toggle className="border-0 shadow-none" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto align-items-center">
          <Nav.Link href="https://www.freecodecamp.org/chinese/learn/">
            课程
          </Nav.Link>
          <Nav.Link href="https://forum.freecodecamp.org/c/chinese/">
            论坛
          </Nav.Link>
          <Nav.Link href="#">社区</Nav.Link>
          <Nav.Link href="#">志愿者</Nav.Link>
          <Nav.Link href="/conference">会议</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
