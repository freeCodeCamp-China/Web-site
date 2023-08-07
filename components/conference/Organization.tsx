import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';

import sponsorData from './../data/SponsorData.json';
import styles from './Organization.module.less';

type Sponsor = Record<'level' | 'href' | 'imgSrc', string>;

type Partner = Record<'href' | 'imgSrc', string>;

export interface OrganizationInfoProps {
  sponsors: Sponsor[];
  partners: Partner[];
}

const { sponsors, partners } = sponsorData as OrganizationInfoProps;

const renderSponsor = ({ level, href, imgSrc }: Sponsor) => (
  <Col as="li" className={styles.sponsor_item} key={imgSrc}>
    <p className="m-0">{level}</p>
    <a target="_blank" href={href} rel="noreferrer">
      <img className="my-3" src={imgSrc} />
    </a>
  </Col>
);

export const OrganizationInfo: FC = () => {
  const platinumItem = sponsors
    ?.filter(sponsor => sponsor.level == '铂金赞助商')
    .map(sponsor => renderSponsor(sponsor));

  const goldItem = sponsors
    ?.filter(sponsor => sponsor.level == '金牌赞助商')
    .map(sponsor => renderSponsor(sponsor));

  const silverItem = sponsors
    ?.filter(sponsor => sponsor.level == '银牌赞助商')
    .map(sponsor => renderSponsor(sponsor));

  const copperItem = sponsors
    ?.filter(sponsor => sponsor.level == '铜牌赞助商')
    .map(sponsor => renderSponsor(sponsor));

  const giftItem = sponsors
    ?.filter(sponsor => sponsor.level == '礼品赞助')
    .map(sponsor => renderSponsor(sponsor));

  const partnerItem = partners?.map(({ href, imgSrc }) => (
    <Col as="li" className={styles.partner} key={href}>
      <a className="mx-3" href={href} target="_blank" rel="noreferrer">
        <img className="pb-5" src={imgSrc} />
      </a>
    </Col>
  ));

  return (
    <div className={styles.organizationInfo}>
      <section
        id="host"
        className={`${styles.container} text-center px-3 mx-auto my-0 position-relative ${styles.animated}`}
      >
        <h2 className="fs-4 pt-5 px-0 pb-3">主办方</h2>
        <div className="d-flex justify-content-between">
          <div className={`${styles.host_item} mx-auto my-0`}>
            <a
              target="_blank"
              href="https://www.freecodecamp.one"
              rel="noreferrer"
            >
              <img src="/freecodecamp_logo.svg" />
            </a>
            <p className="text-start mt-4">
              freeCodeCamp 是 GitHub 上 Star 第一的开源项目。自 2014
              年在美国创立以来，因其符合人性的游戏化课程体系、开放共享的社区运营理念，迅速发展成为风靡全球的免费自学编程社区，更是引领编程新手进入
              IT
              领域的第一入口，而社区开源免费软件也帮助众多非盈利组织节省了大量的软件开发和使用成本。目前，freeCodeCamp
              覆盖全球 160 多个国家、2000 多个城市，约 200
              万开发者在平台上学习。课程涵盖前端、后端、数据可视化等几乎所有的
              Web 开发知识，将陆续上线区块链等新课程。freeCodeCamp 中国成立于
              2016
              年，我们在将英文社区的线上课程进行本地化的基础上，尤其专注于线上线下开发者社区建设、编程教育普及以及开源文化传播，积极推动技术社区与企业、高校等的合作，促进共赢的开发者生态建设。
            </p>
          </div>
        </div>
      </section>

      <section
        className={`${styles.container} mx-auto my-0 position-relative text-center ${styles.animated}`}
      >
        <h2 className="fs-4 pt-5 px-0 pb-3">协办方（持续更新）</h2>
        <div className="partners flex_box ">
          <div className={styles.partner_item}>
            <a
              target="_blank"
              href="https://juejin.im/timeline"
              rel="noreferrer"
            >
              <img src="/image/logo/juejin.png" />
            </a>
          </div>
        </div>
      </section>

      <section
        className={`${styles.container} mx-auto position-relative text-center ${styles.animated}`}
        id="sponsor"
      >
        <h2 className="fs-4 m-0 py-5">赞助商（持续更新）</h2>

        <Row
          as="ul"
          xs={2}
          sm={5}
          className="list-unstyled justify-content-around"
        >
          {platinumItem}
          {goldItem}
        </Row>
        <Row
          as="ul"
          xs={2}
          sm={5}
          className="list-unstyled justify-content-around"
        >
          {silverItem}
          {copperItem}
        </Row>
        <Row
          as="ul"
          xs={2}
          sm={5}
          className="list-unstyled justify-content-around"
        >
          {giftItem}
        </Row>
      </section>

      <section
        className={`${styles.container} mx-auto my-0 position-relative text-center ${styles.animated}`}
        id="partners"
      >
        <h2 className="fs-4 m-0 py-5 px-0 ">合作伙伴 (持续更新)</h2>
        <Row
          as="ul"
          xs={2}
          sm={5}
          className="list-unstyled justify-content-around"
        >
          {partnerItem}
        </Row>
      </section>
    </div>
  );
};
