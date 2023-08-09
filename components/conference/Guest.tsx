import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';

import guestData from './../data/GuestData.json';
import styles from './Guest.module.less';

type Guest = Record<'name' | 'pic' | 'position', string>;

export interface GuestProps {
  guests: Guest[];
}

export const GuestInfo: FC = () => (
  <section
    id="guests"
    className={`${styles.container} text-center mx-auto my-0 position-relative ${styles.animated}`}
  >
    <h2 className="fs-4 m-0 py-5">演讲嘉宾（持续更新）</h2>
    <Row as="ul" xs={2} sm={5} className="list-unstyled justify-content-center">
      {(guestData as Guest[]).map(({ pic, name, position }) => (
        <Col as="li" className={`${styles.media} mt-1 pt-5 px-1`} key={pic}>
          <img src={`/image/speakers/${pic}`} />
          <ul className="list-unstyled">
            <li className="fs-6 fw-bloder mt-3">{name}</li>
            <li className="mt-1">{position}</li>
          </ul>
        </Col>
      ))}
    </Row>
  </section>
);
