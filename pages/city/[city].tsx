import { GetServerSidePropsContext } from 'next';
import { FC } from 'react';
import { Badge, Col, Container, Image, Row } from 'react-bootstrap';

import { PersonCard } from '../../components/PersonCard';
import * as communityData from '../../data/city/cityListData.json';

type Community = (typeof communityData)[keyof typeof communityData];

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext) {
  console.log(params);
  console.log(communityData);

  const community = communityData[params!.city as keyof typeof community];
  console.log(community);
  return !community ? { notFound: true } : { props: community };
}

const OrganizerPeople: FC<Community> = ({ name, organiser }) => (
  <Container>
    {organiser?.[0] && (
      <section className="text-center mx-auto my-0">
        <h2 id="organisers" className="fs-4 m-0 py-5">
          社区组织者
        </h2>
        <Row as="ul" className="list-unstyled text-center g-5" xs={2} sm={6}>
          {organiser.map(({ name, link, pic }) => (
            <Col as="li" key={name}>
              {link ? (
                <a className="text-dark" href={`/organizer/${link}`}>
                  <PersonCard avatar={pic} name={name} />
                </a>
              ) : (
                <PersonCard avatar={pic} name={name} />
              )}
            </Col>
          ))}
        </Row>
      </section>
    )}
  </Container>
);

export default OrganizerPeople;
