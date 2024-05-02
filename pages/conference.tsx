import { Container } from 'react-bootstrap';

import { CityScheduleInfo } from '../components/conference/CityScheduleInfo';
import { ConferenceBase } from '../components/conference/ConferenceBase';
import { GuestInfo } from '../components/conference/Guest';
import { OrganizationInfo } from '../components/conference/Organization';
import { DrawerNav } from '../components/DrawerNav';
import { PageHead } from '../components/PageHead';

const ConferencePage = () => (
  <Container as="main">
    <PageHead title="freeCodeConf" />
    <DrawerNav />
    <ConferenceBase />
    <GuestInfo />
    <CityScheduleInfo />
    <OrganizationInfo />
  </Container>
);

export default ConferencePage;
