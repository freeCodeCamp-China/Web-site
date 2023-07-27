import { Icon } from 'idea-react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { InferGetServerSidePropsType } from 'next';
import { MouseEvent, PureComponent } from 'react';
import { Button, Container, Nav, Offcanvas } from 'react-bootstrap';
import { scrollTo, sleep } from 'web-utility';

import { PageHead } from '../components/PageHead';
import { getConferenceData } from '../data/conferenceData';
import { i18n } from '../models/Translation';
import styles from '../styles/Home.module.less';
import { withTranslation } from './api/core';

export const getServerSideProps = withTranslation(async function () {
  const conferenceData = await getConferenceData();

  const { conference } = conferenceData;

  return {
    props: { conference },
  };
});

const { t } = i18n;

@observer
export default class ConferencePage extends PureComponent<
  InferGetServerSidePropsType<typeof getServerSideProps>
> {
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

  scrollTo = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    scrollTo(event.currentTarget.getAttribute('href')!);

    this.closeDrawer();
  };

  renderDrawer() {
    const { showDrawer } = this,
      { conference } = this.props;

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
          onHide={this.closeDrawer}
        >
          <Offcanvas.Body>
            <Nav className="flex-column">
              {conference.map(({ name }) => (
                <Nav.Link
                  key={name + ''}
                  href={`#${name}`}
                  onClick={this.scrollTo}
                >
                  {name}
                </Nav.Link>
              ))}
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

  render() {
    return (
      <>
        <Container as="main" className={styles.main}>
          <PageHead title="Hello Conference Page!" />
          <h1>Hello Conference Page!</h1>
          <h2>Let&apos;s get our hands dirty!</h2>
        </Container>
        {this.renderDrawer()}
      </>
    );
  }
}
