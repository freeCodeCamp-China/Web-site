import { GetServerSidePropsContext } from 'next';
import { FC } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

import * as volunteerData from '../api/organiser';

interface VolunteerProps {
  volunteer: (typeof volunteerData)[keyof typeof volunteerData];
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { name } = context.query;
  const volunteer = volunteerData[name as keyof typeof volunteerData];
  if (!volunteer) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      volunteer,
    },
  };
}

const OrganiserPeople: FC<VolunteerProps> = ({ volunteer }) => {
  return (
    <Container>
      <Row className="text-center pt-4">
        <Col md={3} className="text-md-start">
          <Image src={volunteer?.img} rounded fluid />
        </Col>
        <Col md={9}>
          <h2>{volunteer?.name}</h2>
          <p className="d-flex justify-content-center align-items-center">
            <span>{volunteer?.zhFrom}</span>
            <i className="d-inline-block bg-dark rounded-circle mx-2 w-5 h-5"></i>
            <span>城市志愿者</span>
          </p>
          {volunteer?.github !== '' && (
            <a href={volunteer?.github} target="_blank" rel="noreferrer">
              github
            </a>
          )}
          <p className="text-muted fs-6">{volunteer?.motto}</p>
        </Col>
      </Row>
      <Row className="mt-4 fs-5 lh-base">
        <h1>我与FCC的故事</h1>
        {volunteer?.storyWithFCC.map((item: string, index: number) => (
          <Col className="mt-4" key={index}>
            {item}
          </Col>
        ))}
      </Row>
      {volunteer?.profile.length > 0 && (
        <Row className="mt-4 fs-5 lh-base">
          <Col>
            <h1>项目经历</h1>
            {volunteer.profile.map(
              (item: { title: string; content: string }, index: number) => (
                <section key={index}>
                  {item.title && (
                    <div className="d-inline-block bg-success text-white text-center rounded-pill h-100 fs-5 px-4">
                      {item.title}
                    </div>
                  )}
                  <p className="mt-4">{item.content}</p>
                </section>
              ),
            )}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default OrganiserPeople;
