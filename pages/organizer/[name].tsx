import { GetServerSidePropsContext } from 'next';
import { FC } from 'react';
import { Badge, Col, Container, Image, Row } from 'react-bootstrap';

import { PageHead } from '../../components/PageHead';
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
    <PageHead title={`${name} - ${zhFrom}志愿者`} />

    <Row as="ul" className="list-unstyled text-center pt-4">
      <Col as="li" md={3} className="text-md-start">
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
    <section>
      <h2 className="py-3">我与FCC的故事</h2>
      {storyWithFCC.map(item => (
        <p key={item} className="first-line-indent fs-5 mt-1">
          {item}
        </p>
      ))}
    </section>

    {profile[0] && (
      <section>
        <h2 className="pt-3">项目经历</h2>
        <Row as="ul" className="list-unstyled my-3 fs-5" xs={1}>
          {profile.map(({ title, content }) => (
            <Col as="li" key={title}>
              {title && (
                <Badge
                  as="h3"
                  className="fs-5 text-wrap text-start"
                  bg="success"
                  pill
                >
                  {title}
                </Badge>
              )}
              <p className="mb-4 first-line-indent">{content}</p>
            </Col>
          ))}
        </Row>
      </section>
    )}
  </Container>
);

export default OrganizerPeople;
