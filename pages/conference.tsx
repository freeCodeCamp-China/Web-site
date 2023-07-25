import { observer } from 'mobx-react';
import { Container } from 'react-bootstrap';

import { PageHead } from '../components/PageHead';
import { i18n } from '../models/Translation';
import styles from '../styles/Home.module.less';
import { withTranslation } from './api/core';

export const getServerSideProps = withTranslation();

const { t } = i18n;

const ConferencePage = observer(() => (
  <Container as="main" className={styles.main}>
    <PageHead title="Hello Conference Page!" />

    <h1>Hello Conference Page!</h1>
    <h2>Let&apos;s get our hands dirty!</h2>
  </Container>
));

export default ConferencePage;
