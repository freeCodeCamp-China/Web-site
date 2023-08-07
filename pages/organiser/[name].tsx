import { GetServerSidePropsContext } from 'next';
import { FC } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

import * as volunteerData from '../api/organiser';

type Volunteer = (typeof volunteerData)[keyof typeof volunteerData];

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { name } = context.query;
  const volunteer = volunteerData[name as keyof typeof volunteerData];

  return !volunteer ? { notFound: true } : { props: volunteer };
}

const OrganiserPeople: FC<Volunteer> = ({
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
        <Image rounded fluid src={img} />
      </Col>
      <Col md={9}>
        <h2>{name}</h2>
        <div className="d-flex justify-content-center align-items-center">
          <span>{zhFrom}</span>
          <i className="d-inline-block bg-dark rounded-circle mx-2 w-5 h-5"></i>
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
      {storyWithFCC.map((item, index) => (
        <Col className="mt-4" key={index}>
          {item}
        </Col>
      ))}
    </Row>
    {profile[0] && (
      <>
        <h3>项目经历</h3>
        <Row className="mt-4 fs-5 lh-base">
          <Col>
            {profile.map(({ title, content }) => (
              <Col as="section" key={title}>
                {title && (
                  <h4 className="d-inline-block bg-success text-white text-center rounded-pill h-100 fs-5 px-4">
                    {title}
                  </h4>
                )}
                <p className="mt-4">{content}</p>
              </Col>
            ))}
          </Col>
        </Row>
      </>
    )}
  </Container>
);

export default OrganiserPeople;
