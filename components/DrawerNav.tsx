import { Button, Drawer, Icon, PageNav } from 'idea-react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { Component } from 'react';
import { sleep } from 'web-utility';

@observer
export class DrawerNav extends Component {
  @observable
  accessor drawerShown = false;

  closeDrawer = async () => {
    let { scrollTop } = document.scrollingElement || {};

    do {
      await sleep(0.1);

      if (scrollTop === document.scrollingElement?.scrollTop) {
        this.drawerShown = false;
        break;
      }
      scrollTop = document.scrollingElement?.scrollTop;
      // eslint-disable-next-line no-constant-condition
    } while (true);
  };

  render() {
    const { drawerShown, closeDrawer } = this;

    return (
      <>
        <div className="fixed-bottom p-3">
          <Button theme="primary" onClick={() => (this.drawerShown = true)}>
            <Icon name="layout-text-sidebar" />
          </Button>
        </div>

        <Drawer
          style={{ width: 'max-content' }}
          open={drawerShown}
          onDismiss={closeDrawer}
        >
          <PageNav onItemClick={this.closeDrawer} />
        </Drawer>
      </>
    );
  }
}
