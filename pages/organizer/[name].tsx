import { GetServerSidePropsContext } from 'next';
import { FC } from 'react';
import { Badge, Col, Container, Image, Row } from 'react-bootstrap';

import * as volunteerData from '../api/organizer';

type Volunteer = (typeof volunteerData)[keyof typeof volunteerData];

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext) {
  const volunteer = volunteerData[params!.name as keyof typeof volunteerData];

  return !volunteer ? { notFound: true } : { props: volunteer };
}

const OrganizerPeople: FC<Volunteer> = ({
  name,
  img,
  zhFrom,
  github,
  motto,
  profile,
  storyWithFCC,
}) => (
  <Container>
    <Row className="text-center pt-4">
      <Col md={3} className="text-md-start">
        <Image rounded fluid src={`/image/organizer/${img}`} alt={name} />
      </Col>
      <Col md={9}>
        <h1>{name}</h1>
        <div className="d-flex justify-content-center align-items-center">
          <span>{zhFrom}</span>
          <i className="d-inline-block bg-dark rounded-circle mx-2 w-5 h-5" />
          <span>城市志愿者</span>
        </div>
        {github && (
          <a href={github} target="_blank" rel="noreferrer">
            github
          </a>
        )}
        <p className="text-muted fs-6">{motto}</p>
      </Col>
    </Row>
    <h2>我与FCC的故事</h2>
    <Row className="mt-4 fs-5 lh-base">
      {storyWithFCC.map(item => (
        <Col className="mt-4" key={item}>
          {item}
        </Col>
      ))}
    </Row>
    {profile[0] && (
      <>
        <h2>项目经历</h2>
        <Row className="mt-4 fs-5 lh-base">
          {profile.map(({ title, content }) => (
            <Col as="section" key={title}>
              {title && (
                <Badge as="h3" className="fs-5" bg="success" pill>
                  {title}
                </Badge>
              )}
              <p className="mt-4">{content}</p>
            </Col>
          ))}
        </Row>
      </>
    )}
  </Container>
);

export default OrganizerPeople;
