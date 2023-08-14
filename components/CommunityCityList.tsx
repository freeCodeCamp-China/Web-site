import { FC } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

import cityDatas from '../data/city/CommunityCityListData.json';
import styles from './CommunityCityList.module.less';

export const CommunityCityList: FC = () => (
  <Container>
    <section className="text-center mx-auto my-0 position-relative">
      <h2 id="citys" className="fs-4 m-0 py-5">
        社区城市
      </h2>
      <Row
        as="ul"
        xs={2}
        sm={5}
        className="list-unstyled justify-content-center"
      >
        {Object.values(cityDatas).map(({ name, nameOfPy }) => (
          <Col
            as="li"
            className={`${styles.media} mt-1 pt-5 px-1`}
            key={nameOfPy}
          >
            <a className="text-dark" href={`city/${nameOfPy}`}>
              <Image
                style={{ width: '10rem', height: '10rem' }}
                src="/city_logo.png"
              />
            </a>
            <ul className="list-unstyled mt-3">
              <li className="fs-6 fw-bolder mt-1">{name}</li>
            </ul>
          </Col>
        ))}
      </Row>
    </section>
  </Container>
);
