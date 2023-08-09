import { observer } from 'mobx-react';
import { compose, translator } from 'next-ssr-middleware';
import { Container } from 'react-bootstrap';

import { ConferenceBase } from '../components/conference/ConferenceBase';
import { DrawerNav } from '../components/DrawerNav';
import { PageHead } from '../components/PageHead';
import { i18n } from '../models/Translation';
import styles from '../styles/Home.module.less';

export const getServerSideProps = compose(translator(i18n));

const ConferencePage = observer(() => (
  <Container as="main" className={styles.main}>
    <PageHead title="Hello Conference Page!" />
    <DrawerNav />
    <ConferenceBase />
  </Container>
));

export default ConferencePage;
