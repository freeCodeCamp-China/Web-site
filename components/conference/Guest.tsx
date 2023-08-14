import { FC } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

import guestData from '../../data/conference/GuestData.json';
import styles from './Guest.module.less';

export const GuestInfo: FC = () => (
  <Container>
    <section
      className={`${styles.container} text-center mx-auto my-0 position-relative ${styles.animated}`}
    >
      <h2 id="guests" className="fs-4 m-0 py-5">
        演讲嘉宾（持续更新）
      </h2>
      <Row
        as="ul"
        xs={2}
        sm={5}
        className="list-unstyled justify-content-center"
      >
        {guestData.map(({ pic, name, position }) => (
          <Col as="li" className={`${styles.media} mt-1 pt-5 px-1`} key={pic}>
            <Image style={{ width: '8.75rem' }} src={`/image/speaker/${pic}`} />
            <ul className="list-unstyled mt-3">
              <li className="fs-6 fw-bolder mt-1">{name}</li>
              <li className="mt-1">{position}</li>
            </ul>
          </Col>
        ))}
      </Row>
    </section>
  </Container>
);
