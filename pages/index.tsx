import { observer } from 'mobx-react';
import { InferGetServerSidePropsType } from 'next';
import { cache, compose, errorLogger } from 'next-ssr-middleware';
import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { GitCard } from '../components/Git/Card';
import { PageHead } from '../components/PageHead';
import { PersonCard } from '../components/PersonCard';
import { SectionTitle } from '../components/SectionTitle';
import { RepositoryModel } from '../models/Repository';
import * as cityData from './api/city';

export const getServerSideProps = compose(cache(), errorLogger, async () => {
  const cities = Object.entries(cityData)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, { name, github }]) => ({
        key,
        name,
        github,
      })),
    repositories = (await new RepositoryModel().getAll()).filter(
      ({ archived }) => !archived,
    );
  return {
    props: { cities, repositories },
  };
});

const HomePage: FC<InferGetServerSidePropsType<typeof getServerSideProps>> =
  observer(({ cities, repositories }) => (
    <Container as="main">
      <PageHead />

      <SectionTitle
        id="cities"
        className="py-5 text-center text-md-start ps-lg-5 ps-md-4"
        count={cities.length}
      >
        城市社区
      </SectionTitle>
      <Row as="ul" className="list-unstyled" xs={2} sm={4} lg={6}>
        {cities.map(({ key, name, github }) => (
          <PersonCard
            key={key}
            name={name}
            avatar={github ? `${github}.png` : '/city_logo.png'}
            link={`/city/${key}`}
          />
        ))}
      </Row>

      <SectionTitle
        id="repositories"
        className="py-5 text-center text-md-start ps-lg-5 ps-md-4"
        count={repositories.length}
      >
        开源项目
      </SectionTitle>
      <Row as="ul" className="list-unstyled g-3" xs={1} sm={2} lg={4}>
        {repositories.map(repository => (
          <Col as="li" key={repository.id}>
            <GitCard className="h-100" {...repository} />
          </Col>
        ))}
      </Row>
    </Container>
  ));

export default HomePage;
