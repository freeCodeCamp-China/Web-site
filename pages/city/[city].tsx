import { GetServerSidePropsContext } from 'next';
import { FC, useState } from 'react';
import {
  Col,
  Container,
  Image,
  OverlayTrigger,
  Row,
  Tooltip,
} from 'react-bootstrap';

import * as communityData from '../../data/city/CommunityCityListData.json';
import styles from './city.module.less';

type Community = (typeof communityData)[keyof typeof communityData];

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext) {
  const community = communityData[params!.city as keyof typeof communityData];

  return !community ? { notFound: true } : { props: community };
}

const OrganizerPeople: FC<Community> = ({
  name,
  organisers,
  speakers,
  partners,
  website,
  weibo,
  github,
  wechat,
  banner,
  briefs,
}) => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <section id="info" className="d-flex justify-content-evenly">
        <div
          className="w-50"
          onMouseOver={() => setShow(true)}
          onMouseOut={() => setShow(false)}
          style={{ position: 'relative' }}
        >
          <Image
            src={`/image/banner/${banner}`}
            className="h-100 w-100"
            style={{ position: 'absolute', left: '0', top: '0' }}
            alt={banner}
          />
          {show && briefs?.[0] && (
            <div
              className={`${styles.shadowin} w-100 h-100 text-light d-flex justify-content-center align-items-center`}
              style={{ position: 'absolute', left: '0', top: '0' }}
            >
              <ul className="list-unstyled">
                {briefs.map(brief => (
                  <li key={brief}>
                    <p className="m-3">{brief}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="w-25">
          <div className="text-center fs-3 pt-3">
            欢迎加入
            <br />
            freeCodeCamp
            <br />
            <span>{name}</span>社区
          </div>
          <Row as="ul" className="ms-4 pt-3" xs={1}>
            <Col as="li" id="websiteLink" className="py-1 ">
              <a
                href={website ? website : '/'}
                target="_blank"
                className="text-success"
                rel="noreferrer"
              >
                网站
              </a>
            </Col>
            <Col as="li" id="qrcodeLink" className="py-1">
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
            <Col as="li" id="weiboLink" className="py-1">
              <a
                href={weibo ? weibo : '/'}
                target="_blank"
                className="text-success"
                rel="noreferrer"
              >
                微博
              </a>
            </Col>
            <Col as="li" id="githubLink" className="py-1">
              <a
                href={github ? github : '/'}
                target="_blank"
                className="text-success"
                rel="noreferrer"
              >
                GitHub
              </a>
            </Col>
          </Row>
        </div>
      </section>

      {organisers?.[0] && (
        <section className="text-center mx-auto my-0">
          <h2 id="organisers" className="fs-4 m-0 py-5 text-start">
            社区组织者
          </h2>
          <Row
            as="ul"
            className="list-unstyled text-center justify-content-around g-5"
            xs={2}
            sm={5}
          >
            {organisers.map(({ name, link, pic }) => (
              <Col
                as="li"
                className={`${styles.media} mt-1 pt-5 px-1`}
                key={pic}
              >
                {link ? (
                  <a
                    className="text-dark"
                    href={link ? `/organizer/${link}` : ``}
                  >
                    <Image
                      style={{ width: '9rem', height: '9rem' }}
                      src={`/image/organizer/${pic}`}
                      alt={name}
                    />
                    <ul className="list-unstyled mt-3">
                      <li className="fs-6 fw-bolder mt-1">{name}</li>
                    </ul>
                  </a>
                ) : (
                  <>
                    <Image
                      style={{ width: '9rem', height: '9rem' }}
                      src={`/image/organizer/${pic}`}
                      alt={name}
                    />
                    <ul className="list-unstyled mt-3">
                      <li className="fs-6 fw-bolder mt-1">{name}</li>
                    </ul>
                  </>
                )}
              </Col>
            ))}
          </Row>
        </section>
      )}

      {speakers?.[0] && (
        <section className="text-center mx-auto my-0">
          <h2 id="speakers" className="fs-4 m-0 pt-5 text-start">
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
          <h2 id="partners" className="fs-4 m-0 py-5 px-0 text-start">
            合作企业
          </h2>
          <Row
            as="ul"
            xs={2}
            sm={5}
            className="list-unstyled justify-content-around"
          >
            {partners.map(({ pic, link }) => (
              <Col as="li" className="" key={link}>
                <a
                  className="mx-3"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    className="pb-5"
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
