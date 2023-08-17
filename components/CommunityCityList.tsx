import { FC } from 'react';
import { Container, Row } from 'react-bootstrap';

import * as cityData from '../pages/api/data';
import { PersonCard } from './PersonCard';

export const CommunityCityList: FC = () => (
  <Container>
    <h2 id="cities" className="py-5 text-center text-md-start ps-lg-5 ps-md-4">
      社区城市
    </h2>
    <Row as="ul" className="list-unstyled" xs={2} sm={5}>
      {Object.values(cityData).map(({ name, picPrefix }, index) => (
        <PersonCard
          avatar="/city_logo.png"
          link={`city/${picPrefix}`}
          key={index}
          {...{ name }}
        />
      ))}
    </Row>
  </Container>
);
