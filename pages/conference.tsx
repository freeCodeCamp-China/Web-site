import { observer } from 'mobx-react';
import { InferGetServerSidePropsType } from 'next';
import { PureComponent, ReactNode } from 'react';
import { Container } from 'react-bootstrap';

import { ConferenceBase } from '../components/conference/ConferenceBase';
import { getGuestInfoData, GuestInfo } from '../components/conference/Guest';
import OrganizationInfo, {
  getOrganizationInfoData,
} from '../components/conference/Organization';
import { DrawerNav } from '../components/DrawerNav';
import { PageHead } from '../components/PageHead';
import { i18n } from '../models/Translation';
import styles from '../styles/Home.module.less';
import { withTranslation } from './api/core';

export const getServerSideProps = withTranslation(async function () {
  const guestsData = await getGuestInfoData();
  const { guests } = guestsData;
  const organizationInfo = await getOrganizationInfoData();
  const { sponsors } = organizationInfo;
  const { partners } = organizationInfo;

  return {
    props: { guests, sponsors, partners },
  };
});

const { t } = i18n;

@observer
export default class ConferencePage extends PureComponent<
  InferGetServerSidePropsType<typeof getServerSideProps>
> {
  render() {
    return (
      <Container as="main" className={styles.main}>
        <PageHead title="Hello Conference Page!" />
        <DrawerNav />
        <ConferenceBase />
        <GuestInfo guests={this.props.guests} />
        <OrganizationInfo
          sponsors={this.props.sponsors}
          partners={this.props.partners}
        />
      </Container>
    );
  }
}
