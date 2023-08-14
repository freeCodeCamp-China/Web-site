import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { CommunityCityList } from '../../components/CommunityCityList';
import { PageHead } from '../../components/PageHead';

const City: FC = () => (
  <Container>
    <PageHead title="社区组织者" />
    <CommunityCityList />
  </Container>
);

export default City;
