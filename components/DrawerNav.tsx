import { Icon } from 'idea-react';
import { observer } from 'mobx-react';
import { FC } from 'react';
import { Button, Nav, Offcanvas } from 'react-bootstrap';

import DrawerNavStore from './DrawerNavStore';

export interface DrawerNavProps {
  names: string[];
}

export const DrawerNav: FC<DrawerNavProps> = observer(({ names }) => (
  <>
    <div className="fixed-bottom p-3">
      <Button onClick={() => DrawerNavStore.setShowDrawer(true)}>
        <Icon name="layout-text-sidebar" />
      </Button>
    </div>

    <Offcanvas
      style={{ width: 'max-content' }}
      show={DrawerNavStore.showDrawer}
      onHide={DrawerNavStore.closeDrawer}
    >
      <Offcanvas.Body>
        <Nav className="flex-column">
          {names.map(name => (
            <Nav.Link
              key={name + ''}
              href={`#${name}`}
              onClick={DrawerNavStore.scrollTo}
            >
              {name}
            </Nav.Link>
          ))}
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  </>
));
