import { Icon, PageNav } from 'idea-react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { MouseEvent,PureComponent } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { sleep } from 'web-utility';

@observer
export class DrawerNav extends PureComponent {
  @observable
  showDrawer = false;

  closeDrawer = async () => {
    let { scrollTop } = document.scrollingElement || {};

    do {
      await sleep(0.1);

      if (scrollTop === document.scrollingElement?.scrollTop) {
        this.showDrawer = false;
        break;
      }
      scrollTop = document.scrollingElement?.scrollTop;
    } while (true);
  };

  render() {
    const { showDrawer, closeDrawer } = this;
    return (
      <>
        <div className="fixed-bottom p-3">
          <Button onClick={() => (this.showDrawer = true)}>
            <Icon name="layout-text-sidebar" />
          </Button>
        </div>

        <Offcanvas
          style={{ width: 'max-content' }}
          show={showDrawer}
          onHide={closeDrawer}
        >
          <Offcanvas.Body>
            <PageNav />
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
}
