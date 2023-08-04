import { observer } from 'mobx-react';
import { InferGetServerSidePropsType } from 'next';
import { PureComponent, ReactNode } from 'react';
import { Container } from 'react-bootstrap';

import { ConferenceBase } from '../components/conference/ConferenceBase';
import GuestInfo, {
  getConferenceData,
  GuestProps,
} from '../components/conference/Guest';
import { DrawerNav } from '../components/DrawerNav';
import { PageHead } from '../components/PageHead';
import { i18n } from '../models/Translation';
import styles from '../styles/Home.module.less';
import { withTranslation } from './api/core';

export const getServerSideProps = withTranslation(async function () {
  const guestsData = await getConferenceData();
  const { guests } = guestsData;
  return {
    props: { guests },
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
      </Container>
    );
  }
}
