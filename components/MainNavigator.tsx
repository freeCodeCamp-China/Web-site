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

  renderLinks = () => (
    <NavbarNav className={`ms-auto align-items-center ${styles.navBox}`}>
      <Menu as="li" nav label="课程">
        <MenuItem href="/course" onClick={this.hide}>
          中文稳定版
        </MenuItem>
        <MenuItem
          href="https://www.freecodecamp.org/chinese/learn/"
          target="_blank"
          onClick={this.hide}
        >
          英文最新版
        </MenuItem>
      </Menu>
      <NavLink
        href="https://forum.freecodecamp.org/c/chinese/"
        target="_blank"
        onClick={this.hide}
      >
        论坛
      </NavLink>
      <NavLink href="/issue" onClick={this.hide}>
        开源参与
      </NavLink>
      <NavLink href="/volunteer" onClick={this.hide}>
        志愿者
      </NavLink>
      <NavLink href="/conference" onClick={this.hide}>
        会议
      </NavLink>
    </NavbarNav>
  );

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
            responsive="lg"
            placement="end"
            title="导航菜单"
            open={open}
            onDismiss={hide}
          >
            {this.renderLinks()}
          </Drawer>
        </Container>
      </Navbar>
    );
  }
}
