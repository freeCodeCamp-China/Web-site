import { GetServerSidePropsContext } from 'next';
import { FC } from 'react';
import {
  Badge,
  Card,
  Col,
  Container,
  Image,
  Row,
  Stack,
} from 'react-bootstrap';

import { CommentBox } from '../../components/CommentBox';
import { PageHead } from '../../components/PageHead';
import * as userData from '../api/user';

type UserProfile = (typeof userData)[keyof typeof userData];

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext) {
  const user = userData[params!.username as keyof typeof userData];

  return !user ? { notFound: true } : { props: user };
}

const UserProfilePage: FC<UserProfile> = ({
  username,
  name,
  location,
  bio,
  githubProfile,
  twitter,
  linkedin,
  website,
  avatar,
  joinDate,
  points,
  certifications,
  completedChallenges,
  currentStreak,
  longestStreak,
}) => (
  <Container>
    <PageHead title={`${name || username} - freeCodeCamp 用户`} />

    <Row className="mt-4">
      <Col md={4} className="text-center">
        <Image
          roundedCircle
          fluid
          src={avatar}
          alt={name || username}
          style={{ maxWidth: '200px' }}
        />
      </Col>
      <Col md={8}>
        <h1>{name || username}</h1>
        <p className="text-muted">@{username}</p>
        {location && (
          <p>
            <strong>位置：</strong>
            {location}
          </p>
        )}
        {bio && <p className="mt-3">{bio}</p>}

        <Stack direction="horizontal" gap={3} className="mt-3">
          {githubProfile && (
            <a href={githubProfile} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {twitter && (
            <a href={twitter} target="_blank" rel="noreferrer">
              Twitter
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noreferrer">
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
                <h3>{completedChallenges || 0}</h3>
                <p className="text-muted">完成的挑战</p>
              </Col>
              <Col>
                <h3>{currentStreak || 0}</h3>
                <p className="text-muted">当前连续天数</p>
              </Col>
              <Col>
                <h3>{longestStreak || 0}</h3>
                <p className="text-muted">最长连续天数</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    {certifications && certifications.length > 0 && (
      <section className="mt-4">
        <h2 className="mb-3">认证证书</h2>
        <Row xs={1} md={2} lg={3} className="g-3">
          {certifications.map(({ title, completedDate }) => (
            <Col key={title}>
              <Card className="h-100">
                <Card.Body>
                  <Badge bg="success" className="mb-2">
                    ✓ 已完成
                  </Badge>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text className="text-muted">
                    完成时间：
                    {new Date(completedDate).toLocaleDateString('zh-CN')}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    )}

    <section className="mt-4">
      <p className="text-muted">
        加入时间：{new Date(joinDate).toLocaleDateString('zh-CN')}
      </p>
    </section>

    <CommentBox />
  </Container>
);

export default UserProfilePage;
