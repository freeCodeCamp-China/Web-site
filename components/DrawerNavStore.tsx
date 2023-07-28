import { observable } from 'mobx';
import { MouseEvent } from 'react';
import { scrollTo, sleep } from 'web-utility';

class DrawerNavModel {
  @observable
  showDrawer = false;

  setShowDrawer = (show: boolean) => {
    this.showDrawer = show;
  };

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

  scrollTo = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    scrollTo(event.currentTarget.getAttribute('href')!);

    this.closeDrawer();
  };
}

const DrawerNavStore = new DrawerNavModel();

export default DrawerNavStore;
