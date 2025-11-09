import { cache, compose, errorLogger } from 'next-ssr-middleware';
import { FC } from 'react';
import { Card, Col, Container, Image, Row, Stack } from 'react-bootstrap';

import { CommentBox } from '../../components/CommentBox';
import { PageHead } from '../../components/PageHead';
import { FCCUserProfile, getUserProfile } from '../api/user';

export const getServerSideProps = compose<{ username: string }>(
  cache(),
  errorLogger,
  async ({ params }) => {
    try {
      const props = await getUserProfile(params!.username);

      return { props };
    } catch (error) {
      return { notFound: true };
    }
  },
);

const UserProfilePage: FC<FCCUserProfile> = ({
  username,
  usernameDisplay,
  name,
  picture,
  about,
  location,
  website,
  linkedIn,
  githubProfile,
  joinDate,
  points,
  completedChallenges,
}) => (
  <Container>
    <PageHead
      title={`${name || usernameDisplay || username} - freeCodeCamp 用户`}
    />

    <Row className="mt-4">
      <Col md={4} className="text-center">
        <Image
          roundedCircle
          fluid
          src={picture}
          alt={name || usernameDisplay || username}
          style={{ maxWidth: '200px' }}
        />
      </Col>
      <Col md={8}>
        <h1>{name || usernameDisplay || username}</h1>
        <p className="text-muted">@{usernameDisplay || username}</p>
        {location && (
          <p>
            <strong>位置：</strong>
            {location}
          </p>
        )}
        {about && <p className="mt-3">{about}</p>}

        <Stack direction="horizontal" gap={3} className="mt-3">
          {githubProfile && (
            <a href={githubProfile} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {linkedIn && (
            <a href={linkedIn} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
          {website && (
            <a href={website} target="_blank" rel="noreferrer">
              Website
            </a>
          )}
        </Stack>
      </Col>
    </Row>

    <Row className="mt-4">
      <Col>
        <Card>
          <Card.Body>
            <Row className="text-center">
              <Col>
                <h3>{points}</h3>
                <p className="text-muted">积分</p>
              </Col>
              <Col>
                <h3>{completedChallenges?.length || 0}</h3>
                <p className="text-muted">完成的挑战</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <section className="mt-4">
      <p className="text-muted">
        加入时间：{new Date(joinDate).toLocaleDateString('zh-CN')}
      </p>
    </section>

    <CommentBox />
  </Container>
);

export default UserProfilePage;
