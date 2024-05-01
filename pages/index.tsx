import { observer } from 'mobx-react';
import { compose, translator } from 'next-ssr-middleware';
import { Container } from 'react-bootstrap';

import { CommunityCityList } from '../components/CommunityCityList';
import { PageHead } from '../components/PageHead';
import { i18n } from '../models/Translation';
import styles from '../styles/Home.module.less';

export const getServerSideProps = compose(translator(i18n));

const { t } = i18n;

const HomePage = observer(() => (
  <Container as="main" className={styles.main}>
    <PageHead />
    <CommunityCityList />
  </Container>
));

export default HomePage;
