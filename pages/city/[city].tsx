import { Contributor, GitRepository } from 'mobx-github';
import { cache, compose, errorLogger } from 'next-ssr-middleware';
import { FC } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

import { CommentBox } from '../../components/CommentBox';
import { GitCard } from '../../components/Git/Card';
import { PageHead } from '../../components/PageHead';
import { PersonCard } from '../../components/PersonCard';
import { SectionTitle } from '../../components/SectionTitle';
import { SocialIconBar } from '../../components/SocialIconBar';
import { RepositoryModel } from '../../models/Repository';
import * as communityData from '../api/city';
import styles from './city.module.less';

interface CommunityCityProps {
  city: communityData.CityCommunityMeta;
  repositories: GitRepository[];
  contributors: Contributor[];
}

export const getServerSideProps = compose<
  { city: keyof typeof communityData },
  CommunityCityProps
>(cache(), errorLogger, async ({ params }) => {
  const city = communityData[params!.city],
    organization = city.github?.split('/').at(-1);

  const repositoryStore = organization
    ? new RepositoryModel(organization)
    : null;
  const repositories =
    (await repositoryStore?.getAll({ relation: ['contributors'] }))?.filter(
      ({ fork }) => !fork,
    ) || [];
  // @ts-expect-error Upstream Type compatibility issue
  const contributors = (await repositoryStore?.getAllContributors()) || [];

  return !city
    ? { notFound: true }
    : {
        props: JSON.parse(JSON.stringify({ city, repositories, contributors })),
      };
});

const CommunityCity: FC<CommunityCityProps> = ({
  city: {
    name,
    organizers,
    speakers,
    partners,
    website,
    weibo,
    github,
    wechat,
    banner,
    brief,
  },
  repositories,
  contributors,
}) => (
  <Container>
    <PageHead title={`${name}社区`} />
    <section>
      <Row as="ul" className="list-unstyled justify-content-center">
        <Col as="li" xs={12} sm={8}>
          {banner && (
            <div className="position-relative">
              <Image
                className="object-fit-cover"
                fluid
                src={`/image/banner/${banner}`}
                alt={banner}
              />
              {brief?.[0] && (
                <div
                  className={`${styles.shadowIn} w-100 h-100 position-absolute start-0 top-0 text-light d-flex justify-content-center align-items-center`}
                >
                  <ul className="list-unstyled">
                    {brief.map(brief => (
                      <li key={brief} className="m-3">
                        {brief}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </Col>
        <Col
          as="li"
          xs={12}
          sm={4}
          className="d-flex flex-column justify-content-around gap-4"
        >
          <div className="text-center fs-3 pt-3">
            欢迎加入
            <br />
            freeCodeCamp
            <br />
            <span>{name}</span>社区
          </div>

          <SocialIconBar
            size="2x"
            {...{
              website,
              wechat: `https://open.weixin.qq.com/qr/code?username=${wechat}`,
              weibo,
              github,
            }}
          />
        </Col>
      </Row>
    </section>

    {organizers?.[0] && (
      <section className="text-center mx-auto my-0">
        <SectionTitle
          id="organizers"
          className="fs-4 m-0 py-5 text-center text-md-start ps-md-4 ps-lg-5"
          count={organizers.length}
        >
          社区组织者
        </SectionTitle>
        <Row
          as="ul"
          className="list-unstyled justify-content-center"
          xs={2}
          sm={5}
        >
          {organizers.map(({ name, link, pic }) => (
            <PersonCard
              key={name}
              name={name!}
              avatar={`/image/organizer/${pic}`}
              link={link && `/volunteer/${link}`}
            />
          ))}
        </Row>
      </section>
    )}

    {speakers?.[0] && (
      <section className="text-center mx-auto my-0">
        <SectionTitle
          id="speakers"
          className="fs-4 m-0 py-5 text-center text-md-start ps-md-4 ps-lg-5"
          count={speakers.length}
        >
          演讲嘉宾
        </SectionTitle>
        <Row
          as="ul"
          className="list-unstyled justify-content-around"
          xs={2}
          sm={5}
        >
          {speakers.map(({ pic, name }) => (
            <PersonCard
              key={name}
              name={name!}
              avatar={`/image/speaker/${pic}`}
            />
          ))}
        </Row>
      </section>
    )}

    {contributors[0] && (
      <section className="text-center mx-auto my-0">
        <SectionTitle
          id="speakers"
          className="fs-4 m-0 py-5 text-center text-md-start ps-md-4 ps-lg-5"
          count={contributors.length}
        >
          线上开源志愿者
        </SectionTitle>
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
              name={login!}
              avatar={`https://github.com/${login}.png`}
              link={html_url}
              count={contributions}
            />
          ))}
        </Row>
      </section>
    )}

    {repositories?.[0] && (
      <section className="mx-auto my-0 position-relative">
        <SectionTitle
          id="repositories"
          className="fs-4 m-0 py-5 text-center text-md-start ps-md-4 ps-lg-5"
          count={repositories.length}
        >
          开源项目
        </SectionTitle>
        <Row as="ul" className="list-unstyled g-3" xs={1} sm={2} lg={4}>
          {repositories.map(repository => (
            <Col key={repository.id} as="li">
              <GitCard className="h-100" {...repository} />
            </Col>
          ))}
        </Row>
      </section>
    )}

    {partners?.[0] && (
      <section className="mx-auto my-0 position-relative text-center">
        <SectionTitle
          id="partners"
          className="fs-4 m-0 py-5 text-center text-md-start ps-md-4 ps-lg-5"
          count={partners.length}
        >
          合作企业
        </SectionTitle>
        <Row
          as="ul"
          xs={2}
          sm={5}
          className="list-unstyled justify-content-around"
        >
          {partners.map(({ pic, link }) => (
            <Col key={link} as="li">
              <a className="mx-3" href={link} target="_blank" rel="noreferrer">
                <Image
                  className="pb-5 object-fit-fill align-items-center"
                  style={{ width: '9rem', height: '9rem' }}
                  src={`/image/partner/${pic}`}
                  alt={pic}
                />
              </a>
            </Col>
          ))}
        </Row>
      </section>
    )}

    <CommentBox />
  </Container>
);

export default CommunityCity;
