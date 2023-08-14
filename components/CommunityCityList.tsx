import { FC } from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';

import cityData from '../data/city/CommunityCityListData.json';

export const CommunityCityList: FC = () => (
  <Container>
    <section className="text-center mx-auto my-0 position-relative">
      <h2 id="cities" className="fs-4 m-0 py-5">
        社区城市
      </h2>
      <Row
        as="ul"
        xs={2}
        sm={5}
        className="list-unstyled justify-content-center"
      >
        {Object.values(cityData).map(({ name, nameOfPy }) => (
          <Col as="li" className="mt-1 p-5 px-auto" key={nameOfPy}>
            <Card
              className="rounded-circle"
              style={{ width: '8.75rem', height: '8.75rem' }}
            >
              <a href={nameOfPy}>
                <Card.Img
                  className="rounded-circle"
                  variant="top"
                  src="/city_logo.png"
                  alt={name}
                />
              </a>
              <Card.Body>
                <Card.Text className="fs-5">{name}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  </Container>
);
