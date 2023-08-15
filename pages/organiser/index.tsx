import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { PageHead } from '../../components/PageHead';
import { PersonCard } from '../../components/PersonCard';
import * as data from '../api/data';

const organisers = Object.values(data).flatMap(({ organisers }) => organisers);

const Organizer: FC = () => (
  <Container>
    <PageHead title="社区组织者" />
    <h1 className="mb-4">社区组织者</h1>

    <Row as="ul" className="list-unstyled text-center g-5" xs={2} sm={6}>
      {organisers.map(({ name, link, pic }) => (
        <Col as="li" key={name}>
          {link ? (
            <a className="text-dark" href={`organiser/${link}`}>
              <PersonCard avatar={`/image/organiser/${pic}`} name={name} />
            </a>
          ) : (
            <PersonCard avatar={`/image/organiser/${pic}`} name={name} />
          )}
        </Col>
      ))}
    </Row>
  </Container>
);

export default Organizer;
