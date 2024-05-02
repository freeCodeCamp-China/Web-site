import { observer } from 'mobx-react';
import { InferGetServerSidePropsType } from 'next';
import { cache, compose, errorLogger } from 'next-ssr-middleware';
import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { GitCard } from '../components/Git/Card';
import { PageHead } from '../components/PageHead';
import { PersonCard } from '../components/PersonCard';
import { RepositoryModel } from '../models/Repository';
import * as cityData from '../pages/api/data';

export const getServerSideProps = compose(cache(), errorLogger, async () => {
  const cities = Object.values(cityData).map(({ name, picPrefix }) => ({
      name,
      picPrefix,
    })),
    repositories = await new RepositoryModel().getAll();

  return {
    props: { cities, repositories },
  };
});

const HomePage: FC<InferGetServerSidePropsType<typeof getServerSideProps>> =
  observer(({ cities, repositories }) => (
    <Container as="main">
      <PageHead />
      <h2
        id="cities"
        className="py-5 text-center text-md-start ps-lg-5 ps-md-4"
      >
        社区城市
      </h2>
      <Row as="ul" className="list-unstyled" xs={2} sm={4} lg={6}>
        {cities.map(({ name, picPrefix }) => (
          <PersonCard
            key={name}
            name={name}
            avatar="/city_logo.png"
            link={`city/${picPrefix}`}
          />
        ))}
      </Row>

      <h2
        id="repositories"
        className="py-5 text-center text-md-start ps-lg-5 ps-md-4"
      >
        开源项目
      </h2>
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
