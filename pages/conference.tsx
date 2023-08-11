import { observer } from 'mobx-react';
import { Container } from 'react-bootstrap';

import { CityScheduleInfo } from '../components/conference/CityScheduleInfo';
import { ConferenceBase } from '../components/conference/ConferenceBase';
import { GuestInfo } from '../components/conference/Guest';
import { OrganizationInfo } from '../components/conference/Organization';
import { DrawerNav } from '../components/DrawerNav';
import { PageHead } from '../components/PageHead';
import { i18n } from '../models/Translation';
import styles from '../styles/Home.module.less';
import { withTranslation } from './api/core';

export const getServerSideProps = withTranslation();

const { t } = i18n;

const ConferencePage = observer(() => (
  <Container as="main" className={styles.main}>
    <PageHead title="Hello Conference Page!" />
    <DrawerNav />
    <ConferenceBase />
    <GuestInfo />
    <CityScheduleInfo />
    <OrganizationInfo />
  </Container>
));

export default ConferencePage;
