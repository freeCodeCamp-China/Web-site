import { FC } from 'react';
import { Container, Row } from 'react-bootstrap';

import { PageHead } from '../../components/PageHead';
import { PersonCard } from '../../components/PersonCard';
import * as data from '../api/data';

const organizers = Object.values(data).flatMap(({ organizers }) => organizers);

const Organizer: FC = () => (
  <Container>
    <PageHead title="社区组织者" />
    <h1 className="py-5 text-center text-md-start ps-md-4">社区组织者</h1>

    <Row
      as="ul"
      className="list-unstyled justify-content-center text-center"
      xs={2}
      sm={5}
      md={6}
    >
      {organizers.map(({ name, link, pic }) => (
        <PersonCard
          avatar={`/image/organizer/${pic}`}
          link={`/organizer/${link}` || '#'}
          key={name}
          name={name}
        />
      ))}
    </Row>
  </Container>
);

export default Organizer;
