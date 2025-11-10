import { cache, compose, errorLogger } from 'next-ssr-middleware';
import { FC } from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';

import { CommentBox } from '../../components/CommentBox';
import { PageHead } from '../../components/PageHead';
import { SocialIconBar } from '../../components/SocialIconBar';
import { FCCUserProfile, getUserProfile } from '../api/user';

export const getServerSideProps = compose<{ username: string }>(
  cache(),
  errorLogger,
  async ({ params }) => {
    const userProfile = await getUserProfile(params!.username);

    return { props: JSON.parse(JSON.stringify(userProfile)) };
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
  <Container className="d-flex flex-column gap-4 my-4">
    <PageHead
      title={`${name || usernameDisplay || username} - freeCodeCamp 用户`}
    />

    <Row>
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
        <hgroup>
          <h1>{name || usernameDisplay || username}</h1>
          <p className="text-muted">@{usernameDisplay || username}</p>
        </hgroup>
        {location && (
          <address>
            <strong>位置：</strong>
            {location}
          </address>
        )}
        <time className="text-muted" dateTime={new Date(joinDate).toJSON()}>
          加入时间：{new Date(joinDate).toLocaleDateString('zh-CN')}
        </time>
        {about && <blockquote className="mt-3">{about}</blockquote>}

        <SocialIconBar
          size="2x"
          {...{
            website,
            github: githubProfile,
            fcc: `https://www.freecodecamp.org/${username}`,
            linkedin: linkedIn,
          }}
        />
      </Col>
    </Row>

    <Card body>
      <Row className="text-center">
        <Col>
          <em className="fs-3">{points}</em>
          <div className="text-muted">积分</div>
        </Col>
        <Col>
          <em className="fs-3">{completedChallenges?.length || 0}</em>
          <div className="text-muted">完成的挑战</div>
        </Col>
      </Row>
    </Card>

    <CommentBox />
  </Container>
);

export default UserProfilePage;
