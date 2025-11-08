import { FC } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

import { PageHead } from '../../components/PageHead';
import { PersonCard } from '../../components/PersonCard';
import { SectionTitle } from '../../components/SectionTitle';
import * as userData from '../api/user';

const users = Object.entries(userData)
  .filter(([key]) => key !== 'UserProfile')
  .map(([key, value]) =>
    typeof value === 'object' && 'username' in value ? { key, ...value } : null,
  )
  .filter((user): user is NonNullable<typeof user> => user !== null);

const UserIndexPage: FC = () => (
  <Container as="main">
    <PageHead title="freeCodeCamp 用户" />

    <SectionTitle
      id="users"
      className="py-5 text-center text-md-start ps-lg-5 ps-md-4"
      count={users.length}
    >
      freeCodeCamp 用户
    </SectionTitle>

    <Row as="ul" className="list-unstyled" xs={2} sm={4} lg={6}>
      {users.map(({ key, name, username, avatar }) => (
        <PersonCard
          key={key}
          name={name || username}
          avatar={avatar}
          link={`/user/${username}`}
        />
      ))}
    </Row>
  </Container>
);

export default UserIndexPage;
