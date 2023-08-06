import * as fs from 'fs';
import path from 'path';
import { Col, Row } from 'react-bootstrap';

import styles from './Organization.module.less';

type Sponsor = {
  level: string;
  href: string;
  imgSrc: string;
};

type Partner = {
  href: string;
  imgSrc: string;
};

export interface OrganizationInfoProps {
  sponsors: Sponsor[];
  partners: Partner[];
}

export async function getOrganizationInfoData(): Promise<OrganizationInfoProps> {
  const filePath = path.join(
    process.cwd(),
    './components/data/SponsorData.json',
  );
  const text = fs.readFileSync(filePath, 'utf8');
  let guestJSON = JSON.parse(text) as OrganizationInfoProps;
  return guestJSON;
}

function paserSponsor(sponsor: Sponsor, index: any) {
  return (
    <Col className={`${styles.sponsor_item} text-center d-block`} key={index}>
      <p className="m-0 d-block">{sponsor.level}</p>
      <a target="_blank" href={sponsor.href} rel="noreferrer">
        <img className="my-3" src={sponsor.imgSrc} />
      </a>
    </Col>
  );
}

function OrganizationInfo(organizationInfoProps: OrganizationInfoProps) {
  const sponsors = organizationInfoProps['sponsors'];
  const partners = organizationInfoProps['partners'];

  const platinumItem = sponsors
    ?.filter(sponsor => sponsor.level == '铂金赞助商')
    .map((sponsor, index) => paserSponsor(sponsor, index));

  const goldItem = sponsors
    ?.filter(sponsor => sponsor.level == '金牌赞助商')
    .map((sponsor, index) => paserSponsor(sponsor, index));

  const silverItem = sponsors
    ?.filter(sponsor => sponsor.level == '银牌赞助商')
    .map((sponsor, index) => paserSponsor(sponsor, index));

  const copperItem = sponsors
    ?.filter(sponsor => sponsor.level == '铜牌赞助商')
    .map((sponsor, index) => paserSponsor(sponsor, index));

  const giftItem = sponsors
    ?.filter(sponsor => sponsor.level == '礼品赞助')
    .map((sponsor, index) => paserSponsor(sponsor, index));

  const partnerItem = partners?.map((partner, index) => {
    return (
      <Col className={`${styles.partner}`} key={index}>
        <a
          className="d-block mx-3"
          href={partner.href}
          target="_blank"
          rel="noreferrer"
        >
          <img className="pb-5" src={partner.imgSrc} />
        </a>
      </Col>
    );
  });

  return (
    <div className={`${styles.organizationInfo} d-block`}>
      <section id="host" className="text-center">
        <div
          className={`${styles.container} mx-auto my-0 position-relative ${styles.animated}`}
        >
          <h2 className="fs-4 pt-5 px-0 pb-3">主办方</h2>
          <div className="d-flex justify-content-between">
            <div className={`${styles.host_item} mx-auto my-0`}>
              <a
                target="_blank"
                href="https://www.freecodecamp.one"
                rel="noreferrer"
              >
                <img src="https://conf.freecodecamp.one/assets/freecodecamp-logo.png" />
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
        </div>

        <div
          className={`${styles.container} mx-auto my-0 position-relative ${styles.animated}`}
        >
          <h2 className="fs-4 pt-5 px-0 pb-3">协办方（持续更新）</h2>
          <div className="partners flex_box ">
            <div className="partner_item ml28">
              <a
                target="_blank"
                href="https://juejin.im/timeline"
                rel="noreferrer"
              >
                <img src="https://conf.freecodecamp.one/assets/logo/juejin.png" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${styles.container} mx-auto my-0 position-relative text-center ${styles.animated}`}
        id="sponsor"
      >
        <h2 className="fs-4 m-0 py-5">赞助商（持续更新）</h2>

        <Row
          xs={2}
          sm={5}
          className={`${styles.flex_box} ${styles.sm_flex_warped} list-unstyled d-flex justify-content-around`}
        >
          {platinumItem}
          {goldItem}
        </Row>
        <Row
          xs={2}
          sm={5}
          className={`${styles.flex_box} ${styles.sm_flex_warped} list-unstyled d-flex justify-content-around`}
        >
          {silverItem}
          {copperItem}
        </Row>
        <Row
          xs={2}
          sm={5}
          className={`${styles.flex_box} ${styles.sm_flex_warped} list-unstyled d-flex justify-content-around`}
        >
          {giftItem}
        </Row>
      </section>

      <section
        className={`${styles.container} mx-auto my-0 position-relative ${styles.animated}`}
        id="partners"
      >
        <h2 className="fs-4 m-0 py-5 px-0 text-center">合作伙伴 (持续更新)</h2>
        <Row
          xs={2}
          sm={5}
          className={`${styles.flex_box} ${styles.sm_flex_warped} ${styles.progress} list-unstyled d-flex justify-content-arond`}
        >
          {partnerItem}
        </Row>
      </section>
    </div>
  );
}

export default OrganizationInfo;
