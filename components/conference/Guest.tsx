import * as fs from 'fs';
import path from 'path';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';

import styles from './Guest.module.less';

type Guest = {
  name: string;
  pic: string;
  position: string;
};

export interface GuestProps {
  guests: Guest[];
}

export async function getGuestInfoData(): Promise<GuestProps> {
  const filePath = path.join(process.cwd(), './components/data/GuestData.json');
  const text = fs.readFileSync(filePath, 'utf8');
  let guestJSON = JSON.parse(text) as GuestProps;
  return guestJSON;
}

export const GuestInfo: FC<GuestProps> = ({ guests }) => (
  <div className="d-block text-center" id="guests">
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
            <img src={'https://conf.freecodecamp.one/assets/speakers/' + pic} />
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
