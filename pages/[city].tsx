import { GetServerSidePropsContext } from 'next';
import { FC, useState } from 'react';
import {
  Card,
  Col,
  Container,
  Image,
  OverlayTrigger,
  Row,
  Tooltip,
} from 'react-bootstrap';

import { PageHead } from '../components/PageHead';
import * as communityData from './api/data';
import styles from './city.module.less';

type Community = (typeof communityData)[keyof typeof communityData];

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext) {
  const community = communityData[params!.city as keyof typeof communityData];

  return !community ? { notFound: true } : { props: community };
}

export const renderContactLabel = (href: string, name: string) => (
  <Col as="li" className="py-1 ">
    <a className="text-success" href={href} target="_blank" rel="noreferrer">
      {name}
    </a>
  </Col>
);

const OrganizerPeople: FC<Community> = ({
  name,
  organizers,
  speakers,
  partners,
  website,
  weibo,
  github,
  wechat,
  banner,
  brief,
}) => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <PageHead title={`${name}社区`} />
      <section id="info" className="d-flex justify-content-evenly">
        {banner && (
          <div className="w-50 position-relative">
            <Image fluid src={`/image/banner/${banner}`} alt={banner} />
            {brief?.[0] && (
              <div
                className={`${styles.shadowin} w-100 h-100 position-absolute start-0 top-0 text-light d-flex justify-content-center align-items-center`}
              >
                <ul className="list-unstyled">
                  {brief.map(brief => (
                    <li key={brief} className="m-3">
                      {brief}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <div className="w-25">
          <div className="text-center fs-3 pt-3">
            欢迎加入
            <br />
            freeCodeCamp
            <br />
            <span>{name}</span>社区
          </div>
          <Row as="ul" className="pt-3" xs={1}>
            {website && renderContactLabel(website, '网站')}
            {wechat && (
              <Col as="li" className="py-1">
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-disabled">
                      <Image
                        src={`/image/qrcode/${wechat}`}
                        className="w-75 h-75"
                        alt={name}
                      />
                    </Tooltip>
                  }
                  placement="right"
                >
                  <span className="d-inline-block text-success">微信</span>
                </OverlayTrigger>
              </Col>
            )}
            {weibo && renderContactLabel(weibo, '微博')}
            {github && renderContactLabel(github, 'GitHub')}
          </Row>
        </div>
      </section>

      {organizers?.[0] && (
        <section className="text-center mx-auto my-0">
          <h2 id="organizers" className="fs-4 m-0 ps-5 py-5 text-start">
            社区组织者
          </h2>
          <Row
            as="ul"
            className="list-unstyled text-center justify-content-around g-5"
            xs={2}
            sm={5}
          >
            {organizers.map(({ name, link, pic }) => (
              <Col
                as="li"
                className={`${styles.media} mt-1 pt-5 pb-3 position-relative`}
                key={pic}
              >
                <Card
                  className="rounded-circle mx-5"
                  style={{ width: '10rem', height: '10rem' }}
                >
                  <Card.Img
                    style={{ width: '10rem', height: '10rem' }}
                    variant="top"
                    src={`/image/organizer/${pic}`}
                    alt={name}
                  />
                  <Card.Body>
                    <a
                      className="stretched-link text-dark fw-bolder mt-3"
                      href={link ? `/organizer/${link}` : '#'}
                    >
                      <Card.Text>{name}</Card.Text>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      )}

      {speakers?.[0] && (
        <section className="text-center mx-auto my-0">
          <h2 id="speakers" className="fs-4 m-0 ps-5 pt-5 text-start">
            演讲嘉宾
          </h2>
          <Row
            as="ul"
            className="list-unstyled justify-content-around"
            xs={2}
            sm={5}
          >
            {speakers.map(({ pic, name }) => (
              <Col
                as="li"
                className={`${styles.media} mt-1 pt-5 px-1`}
                key={pic}
              >
                <Image
                  style={{ width: '9rem', height: '9rem' }}
                  src={`/image/speaker/${pic}`}
                  alt={name}
                />
                <ul className="list-unstyled mt-3">
                  <li className="fs-6 fw-bolder mt-1">{name}</li>
                </ul>
              </Col>
            ))}
          </Row>
        </section>
      )}

      {partners?.[0] && (
        <section className="mx-auto my-0 position-relative text-center">
          <h2 id="partners" className="fs-4 m-0 ps-5 py-5 px-0 text-start">
            合作企业
          </h2>
          <Row
            as="ul"
            xs={2}
            sm={5}
            className="list-unstyled justify-content-around"
          >
            {partners.map(({ pic, link }) => (
              <Col as="li" key={link}>
                <a
                  className="mx-3"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    className="pb-5 object-fit-fill align-items-center"
                    style={{ width: '9rem', height: '9rem' }}
                    src={`/image/partner/${pic}`}
                    alt={pic}
                  />
                </a>
              </Col>
            ))}
          </Row>
        </section>
      )}
    </Container>
  );
};
export default OrganizerPeople;
