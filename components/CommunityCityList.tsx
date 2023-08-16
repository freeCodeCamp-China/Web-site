import { FC } from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';

import * as cityData from '../pages/api/data';

export const CommunityCityList: FC = () => (
  <Container>
    <section className="text-center mx-auto my-0 position-relative">
      <h2 id="cities" className="fs-4 py-3">
        社区城市
      </h2>
      <Row
        as="ul"
        className="list-unstyled justify-content-center"
        xs={2}
        sm={5}
      >
        {Object.values(cityData).map(({ name, picPrefix }) => (
          <Col
            as="li"
            className="my-3 d-flex justify-content-center"
            key={picPrefix}
          >
            <Card className="border-0">
              <Card.Img
                className="rounded-circle"
                variant="top"
                src="/city_logo.png"
                alt={name}
                style={{ width: '8rem' }}
              />
              <Card.Body>
                <Card.Title
                  as="a"
                  className="stretched-link text-dark"
                  href={`city/${picPrefix}`}
                >
                  {name}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  </Container>
);
