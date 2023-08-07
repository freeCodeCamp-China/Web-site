import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';

import guestData from '../data/GuestData';
import styles from './Guest.module.less';

type Guest = Record<'name' | 'pic' | 'position', string>;

export interface GuestProps {
  guests: Guest[];
}

const { guests } = guestData as GuestProps;

export const GuestInfo: FC = () => (
  <div className="text-center" id="guests">
    <section
      className={`${styles.container} mx-auto my-0 position-relative ${styles.animated}`}
    >
      <h2 className="fs-4 m-0 py-5">演讲嘉宾（持续更新）</h2>
      <Row
        as="ul"
        xs={2}
        sm={5}
        className="list-unstyled justify-content-center"
      >
        {guests.map(({ pic, name, position }) => (
          <Col as="li" className={`${styles.media} mt-1 pt-5 px-1`} key={pic}>
            <img src={'/image/speakers/' + pic} />
            <h4 className="fs-6">{name}</h4>
            <p className="mt-3">
              <span>{position}</span>
            </p>
          </Col>
        ))}
      </Row>
    </section>
  </div>
);
