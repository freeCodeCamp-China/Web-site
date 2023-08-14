import { GetServerSidePropsContext } from 'next';
import { FC } from 'react';
import { Badge, Col, Container, Image, Row } from 'react-bootstrap';

import { PersonCard } from '../../components/PersonCard';
import * as communityData from '../../data/city/CommunityCityListData.json';

type Community = (typeof communityData)[keyof typeof communityData];

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext) {
  const community = communityData[params!.city as keyof typeof community];
  console.log(community);
  return !community ? { notFound: true } : { props: community };
}

const OrganizerPeople: FC<Community> = ({
  name,
  organisers,
  speakers,
  partners,
}) => (
  <Container>
    {organisers?.[0] && (
      <section className="text-center mx-auto my-0">
        <h2 id="organisers" className="fs-4 m-0 py-5">
          社区组织者
        </h2>
        <Row as="ul" className="list-unstyled text-center g-5" xs={2} sm={6}>
          {organisers.map(({ name, link, pic }) => (
            <Col as="li" key={name}>
              {link ? (
                <a className="text-dark" href={`/organizer/${link}`}>
                  <PersonCard avatar={`/image/organizer/${pic}`} name={name} />
                </a>
              ) : (
                <PersonCard avatar={`/image/organizer/${pic}`} name={name} />
              )}
            </Col>
          ))}
        </Row>
      </section>
    )}

    {speakers?.[0] && (
      <section className="text-center mx-auto my-0">
        <h2 id="speakers" className="fs-4 m-0 py-5">
          演讲嘉宾
        </h2>
        <Row as="ul" className="list-unstyled text-center g-5" xs={2} sm={6}>
          {speakers.map(({ name, pic }) => (
            <Col as="li" key={name}>
              <PersonCard avatar={`/image/speaker/${pic}`} name={name} />
            </Col>
          ))}
        </Row>
      </section>
    )}

    {partners?.[0] && (
      <section className="mx-auto my-0 position-relative text-center">
        <h2 id="partners" className="fs-4 m-0 py-5 px-0">
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
              <a className="mx-3" href={link} target="_blank" rel="noreferrer">
                <Image className="pb-5" src={`/image/partner/${pic}`} />
              </a>
            </Col>
          ))}
        </Row>
      </section>
    )}
  </Container>
);

export default OrganizerPeople;
