import { FC } from 'react';
import { Badge, Col, Container, Image, Row } from 'react-bootstrap';
import { groupBy } from 'web-utility';

import { partners, sponsors } from '../../data/conference/SponsorData';
import styles from './Organization.module.less';

const renderLevel = (level: number) =>
  ['铂金赞助商', '金牌赞助商', '银牌赞助商', '铜牌赞助商'][level] || '礼品赞助';

export const OrganizationInfo: FC = () => (
  <Container>
    <section className="container text-center px-3 mx-auto my-0 position-relative animated">
      <h2 id="host" className="fs-4 pt-5 px-0 pb-3">
        主办方
      </h2>
      <div className="d-flex justify-content-between">
        <div className="mx-auto my-0">
          <a target="_blank" href="/" rel="noreferrer">
            <img className={styles.logo} src="/freecodecamp-logo.png" />
          </a>
          <p className="text-start mt-4">
            freeCodeCamp 是 GitHub 上 Star 第一的开源项目。自 2014
            年在美国创立以来，因其符合人性的游戏化课程体系、开放共享的社区运营理念，迅速发展成为风靡全球的免费自学编程社区，更是引领编程新手进入
            IT
            领域的第一入口，而社区开源免费软件也帮助众多非盈利组织节省了大量的软件开发和使用成本。目前，freeCodeCamp
            覆盖全球 160 多个国家、2000 多个城市，约 200
            万开发者在平台上学习。课程涵盖前端、后端、数据可视化等几乎所有的 Web
            开发知识，将陆续上线区块链等新课程。freeCodeCamp 中国成立于 2016
            年，我们在将英文社区的线上课程进行本地化的基础上，尤其专注于线上线下开发者社区建设、编程教育普及以及开源文化传播，积极推动技术社区与企业、高校等的合作，促进共赢的开发者生态建设。
          </p>
        </div>
      </div>
    </section>

    <section className="container mx-auto my-0 position-relative text-center animated">
      <h2 id="co-organizer" className="fs-4 py-4">
        协办方（持续更新）
      </h2>
      <Row as="ul" className="list-unstyled">
        <Col as="li" className={styles.partner_item}>
          <a target="_blank" href="https://juejin.im/timeline" rel="noreferrer">
            <Image src="/image/partner/juejin.png" />
          </a>
        </Col>
      </Row>
    </section>

    <section className="container mx-auto position-relative text-center animated">
      <h2 id="sponsor" className="fs-4 m-0 py-5">
        赞助商（持续更新）
      </h2>

      {Object.values(groupBy(sponsors, 'level')).map(sponsors => (
        <Row
          as="ul"
          className="list-unstyled justify-content-around p-0"
          xs={2}
          sm={5}
          key={sponsors[0].level}
        >
          {sponsors.map(({ level, href, imgSrc }) => (
            <Col as="li" className={styles.sponsor_item} key={imgSrc}>
              <Row
                as="ul"
                className="list-unstyled  justify-content-center align-items-center p-0"
                xs={1}
              >
                <Badge className="m-1 w-75" bg="info">
                  {renderLevel(level)}
                </Badge>
                <a target="_blank" href={href} rel="noreferrer">
                  <Image src={imgSrc} />
                </a>
              </Row>
            </Col>
          ))}
        </Row>
      ))}
    </section>

    <section className="container mx-auto my-0 position-relative text-center animated">
      <h2 id="partners" className="fs-4 m-0 py-5 px-0">
        合作伙伴 (持续更新)
      </h2>
      <Row
        as="ul"
        className="list-unstyled justify-content-around align-items-center"
        xs={2}
        sm={5}
      >
        {partners.map(({ href, imgSrc }) => (
          <Col as="li" className={styles.partner} key={href}>
            <a href={href} target="_blank" rel="noreferrer">
              <Image className="object-fit-fill" src={imgSrc} />
            </a>
          </Col>
        ))}
      </Row>
    </section>
  </Container>
);
