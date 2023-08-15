import { OverlayBox } from 'idea-react';
import { GetServerSidePropsContext } from 'next';
import { FC } from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';

import { PageHead } from '../../components/PageHead';
import * as communityData from '../api/data';
import styles from './city.module.less';

type CommunityCityProps = (typeof communityData)[keyof typeof communityData];

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext) {
  const cityInfo = communityData[params!.city as keyof typeof communityData];

  return !cityInfo ? { notFound: true } : { props: cityInfo };
}

export const renderContactLabel = (href: string, name: string) => (
  <Col as="li" className="py-1">
    <a className="text-success" href={href} target="_blank" rel="noreferrer">
      {name}
    </a>
  </Col>
);

const CommunityCity: FC<CommunityCityProps> = ({
  name,
  organisers,
  speakers,
  partners,
  website,
  weibo,
  github,
  wechat,
  banner,
  brief,
}) => (
  <Container>
    <PageHead title={`${name}社区`} />
    <section>
      <Row
        as="ul"
        className="list-unstyled justify-content-center"
        xs={1}
        sm={2}
      >
        <Col as="li" className={styles.banner}>
          {banner && (
            <div className="position-relative">
              <Image
                className="object-fit-cover"
                fluid
                src={`/image/banner/${banner}`}
                alt={banner}
              />
              {brief?.[0] && (
                <div
                  className={`${styles.shadowIn}  w-100 h-100 position-absolute start-0 top-0 text-light d-flex justify-content-center align-items-center`}
                  id="tryAgaim"
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
        </Col>
        <Col as="li" className={styles.join}>
          <div className="text-center fs-3 pt-3">
            欢迎加入
            <br />
            freeCodeCamp
            <br />
            <span>{name}</span>社区
          </div>

          <Row as="ul" className="pt-3 justify-content-center" xs={4} sm={1}>
            {website && renderContactLabel(website, '网站')}
            {wechat && (
              <Col as="li" className="py-1">
                <OverlayBox
                  title={
                    <Image
                      src={`/image/qrcode/${wechat}`}
                      className="w-75 h-75"
                      alt={name}
                    />
                  }
                  placement="bottom"
                >
                  <span className="d-inline-block text-success">微信</span>
                </OverlayBox>
              </Col>
            )}
            {weibo && renderContactLabel(weibo, '微博')}
            {github && renderContactLabel(github, 'GitHub')}
          </Row>
        </Col>
      </Row>
    </section>

    {organisers?.[0] && (
      <section className="text-center mx-auto my-0">
        <h2 id="organisers" className="fs-4 m-0 ps-5 py-5 text-start">
          社区组织者
        </h2>
        <Row
          as="ul"
          className="list-unstyled text-center justify-content-around g-5"
          xs={2}
          sm={5}
        >
          {organisers.map(({ name, link, pic }) => (
            <Col as="li" className="media mt-1 pt-5 pb-3" key={pic}>
              <Card className="border border-0">
                <Card.Img
                  className="mx-3"
                  style={{ width: '10rem', height: '10rem' }}
                  variant="top"
                  src={`/image/organiser/${pic}`}
                  alt={name}
                />
                <Card.Body>
                  <Card.Title
                    as="a"
                    className="stretched-link text-dark fw-bolder mt-3 text-center mx-2"
                    href={link ? `/organiser/${link}` : '#'}
                  >
                    {name}
                  </Card.Title>
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
            <Col as="li" className="media mt-1 pt-5 pb-3" key={pic}>
              <Card className="border border-0">
                <Card.Img
                  className="mx-4"
                  style={{ width: '9rem', height: '9rem' }}
                  variant="top"
                  src={`/image/speaker/${pic}`}
                  alt={name}
                />
                <Card.Body>
                  <Card.Title className="fw-bolder text-dark text-center mt-3 mx-2">
                    {name}
                  </Card.Title>
                </Card.Body>
              </Card>
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
              <a className="mx-3" href={link} target="_blank" rel="noreferrer">
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

export default CommunityCity;
