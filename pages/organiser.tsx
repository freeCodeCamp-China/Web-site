import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { PersonCard } from '../components/PersonCard';
import * as data from './api/data';

const organizers = Object.values(data).flatMap(({ organiser }) => organiser);

const Organiser: FC = () => {
  return (
    <Container>
      <h1 className="mb-4">社区组织者</h1>
      <Row as="ul" className="list-unstyled g-5" xs={2} sm={6}>
        {organizers.map(item => (
          <Col key={item.name} className="text-center">
            {item.link ? (
              <a className="text-dark" href={`organiser/${item.link}`}>
                <PersonCard avatar={item.pic} name={item.name} />
              </a>
            ) : (
              <PersonCard avatar={item.pic} name={item.name} />
            )}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Organiser;
