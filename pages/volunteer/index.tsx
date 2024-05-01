import { InferGetServerSidePropsType } from 'next';
import { cache, compose, errorLogger } from 'next-ssr-middleware';
import { FC } from 'react';
import { Badge, Container, Row } from 'react-bootstrap';

import { PageHead } from '../../components/PageHead';
import { PersonCard } from '../../components/PersonCard';
import { RepositoryModel } from '../../models/Repository';
import * as data from '../api/data';

export const getServerSideProps = compose(cache(), errorLogger, async () => {
  const contributors = await new RepositoryModel().getAllContributors();

  return { props: { contributors } };
});

const organizers = Object.values(data).flatMap(({ organizers }) => organizers);

const Organizer: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  contributors,
}) => (
  <Container>
    <PageHead title="志愿者" />
    <h1 className="py-5 text-center text-md-start ps-md-4">志愿者</h1>

    <h2 className="d-flex align-items-center gap-2">
      线上仓库贡献者
      <Badge className="fs-6" pill bg="danger">
        {contributors.length}
      </Badge>
    </h2>
    <Row
      as="ul"
      className="list-unstyled justify-content-center text-center"
      xs={2}
      sm={5}
      md={6}
    >
      {contributors.map(({ login, html_url, contributions }) => (
        <PersonCard
          key={login}
          name={login}
          avatar={`https://github.com/${login}.png`}
          link={html_url}
          count={contributions}
        />
      ))}
    </Row>

    <h2 className="d-flex align-items-center gap-2">
      线下社区组织者
      <Badge className="fs-6" pill bg="danger">
        {organizers.length}
      </Badge>
    </h2>
    <Row
      as="ul"
      className="list-unstyled justify-content-center text-center"
      xs={2}
      sm={5}
      md={6}
    >
      {organizers.map(({ name, link, pic }) => (
        <PersonCard
          key={name}
          name={name}
          avatar={`/image/organizer/${pic}`}
          link={link && `/volunteer/${link}`}
        />
      ))}
    </Row>
  </Container>
);

export default Organizer;
