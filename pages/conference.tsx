import { observer } from 'mobx-react';
import { Container } from 'react-bootstrap';

import { PageHead } from '../components/PageHead';
import { i18n } from '../models/Translation';
import styles from '../styles/Home.module.less';
import { withTranslation } from './api/core';

export const getServerSideProps = withTranslation();

const ConferencePage = observer(() => {
  const { t } = i18n;

  return (
    <>
      <PageHead />

      <Container as="main" className={styles.main}>
        <h1>Hello Conference Page!</h1>
        <h2>Let's get our hands dirty!</h2>
      </Container>
    </>
  );
});

export default ConferencePage;
