import { FC } from 'react';
import { Container, Row } from 'react-bootstrap';

import guestData from '../../data/conference/GuestData.json';
import { PersonCard } from '../PersonCard';

export const GuestInfo: FC = () => (
  <Container className="text-center mx-auto my-0">
    <h2 id="guests" className="fs-4 m-0 py-5">
      演讲嘉宾（持续更新）
    </h2>
    <Row as="ul" className="list-unstyled" xs={2} sm={4}>
      {guestData.map(({ pic, name, position }, index) => (
        <PersonCard
          avatar={`/image/speaker/${pic}`}
          key={index}
          {...{ name, position }}
        />
      ))}
    </Row>
  </Container>
);
