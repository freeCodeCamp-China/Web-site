import { OverlayBox } from 'idea-react';
import { GetServerSidePropsContext } from 'next';
import { FC } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

import { PageHead } from '../../components/PageHead';
import { PersonCard } from '../../components/PersonCard';
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
  organizers,
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
                  <span className="text-success">微信</span>
                </OverlayBox>
              </Col>
            )}
            {weibo && renderContactLabel(weibo, '微博')}
            {github && renderContactLabel(github, 'GitHub')}
          </Row>
        </Col>
      </Row>
    </section>

    {organizers?.[0] && (
      <section className="text-center mx-auto my-0">
        <h2
          id="organizers"
          className="fs-4 m-0 py-5 text-center text-md-start ps-md-4 ps-lg-5"
        >
          社区组织者
        </h2>
        <Row
          as="ul"
          className="list-unstyled justify-content-center"
          xs={2}
          sm={5}
        >
          {organizers.map(({ name, link, pic }) => (
            <PersonCard
              avatar={`/image/organizer/${pic}`}
              link={`/organizer/${link}` || '#'}
              key={name}
              name={name}
            />
          ))}
        </Row>
      </section>
    )}

    {speakers?.[0] && (
      <section className="text-center mx-auto my-0">
        <h2
          id="speakers"
          className="fs-4 m-0 py-5 text-center text-md-start ps-md-4 ps-lg-5"
        >
          演讲嘉宾
        </h2>
        <Row
          as="ul"
          className="list-unstyled justify-content-around"
          xs={2}
          sm={5}
        >
          {speakers.map(({ pic, name }) => (
            <PersonCard
              avatar={`/image/speaker/${pic}`}
              key={name}
              name={name}
            />
          ))}
        </Row>
      </section>
    )}

    {partners?.[0] && (
      <section className="mx-auto my-0 position-relative text-center">
        <h2
          id="partners"
          className="fs-4 m-0 py-5 text-center text-md-start ps-md-4 ps-lg-5"
        >
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
