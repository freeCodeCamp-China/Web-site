import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { PageHead } from '../components/PageHead';
import { PersonCard } from '../components/PersonCard';
import * as data from './api/data';

const organizers = Object.values(data).flatMap(({ organiser }) => organiser);

const Organiser: FC = () => (
  <>
    <PageHead title="社区组织者" />
    <Container>
      <h1 className="mb-4">社区组织者</h1>

      <Row as="ul" className="list-unstyled text-center g-5" xs={2} sm={6}>
        {organizers.map(({ name, link, pic }) => (
          <Col key={name}>
            {link ? (
              <a className="text-dark" href={`organiser/${link}`}>
                <PersonCard avatar={pic} name={name} />
              </a>
            ) : (
              <PersonCard avatar={pic} name={name} />
            )}
          </Col>
        ))}
      </Row>
    </Container>
  </>
);

export default Organiser;
