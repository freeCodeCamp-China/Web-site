import { Container } from 'react-bootstrap';

import { ConferenceBase } from '../components/conference/ConferenceBase';
import { DrawerNav } from '../components/DrawerNav';
import { PageHead } from '../components/PageHead';
import styles from '../styles/Home.module.less';

const ConferencePage = () => (
  <Container as="main" className={styles.main}>
    <PageHead title="freeCodeConf" />
    <DrawerNav />
    <ConferenceBase />
  </Container>
);

export default ConferencePage;
