import {
  Container,
  Drawer,
  Menu,
  MenuItem,
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  NavLink,
} from 'idea-react';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import { Component } from 'react';

import styles from './MainNavigator.module.less';

@observer
export class MainNavigator extends Component {
  @observable accessor open = false;

  show = action(() => (this.open = true));

  hide = action(() => (this.open = false));

  render() {
    const { open, show, hide } = this;

    return (
      <Navbar
        className="shadow-sm theme-success sticky-top"
        theme="dark"
        expand="lg"
      >
        <Container>
          <NavbarBrand href="/" className="ps-2">
            <img
              alt="logo"
              src="/freecodecamp_logo.svg"
              className={styles.logo}
            />
          </NavbarBrand>

          <NavbarToggler
            expanded={open}
            className="border-0 shadow-none"
            onClick={show}
          />

          <Drawer
            className="w-100"
            bodyClassName="d-flex"
            title="导航菜单"
            responsive="lg"
            placement="end"
            open={open}
            onDismiss={hide}
          >
            <NavbarNav
              className={`ms-auto align-items-center ${styles.navBox}`}
            >
              <Menu as="li" nav label="课程">
                <MenuItem href="/course" onClick={hide}>
                  中文稳定版
                </MenuItem>
                <MenuItem
                  href="https://www.freecodecamp.org/chinese/learn/"
                  target="_blank"
                  onClick={hide}
                >
                  英文最新版
                </MenuItem>
              </Menu>
              <NavLink
                href="https://forum.freecodecamp.org/c/chinese/"
                target="_blank"
                onClick={hide}
              >
                论坛
              </NavLink>
              <NavLink href="/issue" onClick={hide}>
                开源参与
              </NavLink>
              <NavLink href="/volunteer" onClick={hide}>
                志愿者
              </NavLink>
              <NavLink href="/conference" onClick={hide}>
                会议
              </NavLink>
            </NavbarNav>
          </Drawer>
        </Container>
      </Navbar>
    );
  }
}
