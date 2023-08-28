import { FC } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';

import styles from './ConferenceBase.module.less';

export const ConferenceBase: FC = () => (
  <Container>
    <h1 className="m-0 pb-5 text-center">2018 freeCodeConf</h1>
    <section
      className={`${styles.abstract} container m-0 position-relative p-sm-0 pb-5 text-center`}
    >
      <h2 id="abstract" className="m-0 py-4 fs-4">
        大会宗旨
      </h2>
      <p className="text-start w-auto m-auto p-3 ">
        freeCodeConf 是 freeCodeCamp
        中国举办的每年一度大型联动技术大会，旨在联合 freeCodeCamp
        各城市本地开发者社区，促进高度垂直、高度人才集中、高度明星企业集结的互联网与软件行业技术交流。第一届
        freeCodeConf 将于 2018 年 11 月 10 日在全国 12
        个城市同期举办，诚邀广大开发者共享技术盛宴。
      </p>
    </section>
    <section className="container text-center m-0 position-relative p-sm-0 animated">
      <h2 id="review" className="m-0 py-4 fs-4">
        往届活动回顾
      </h2>

      <Carousel data-bs-theme="dark" className="h-25">
        <Carousel.Item interval={1000}>
          <img className="w-100 mb-2" src="/image/review1.png" alt="review1" />
          <Carousel.Caption>
            <p className={`text-light ${styles.textShadow}`}>
              2017 年 11 月，freeCodeCamp 成都社区举办
              Web前端交流大会，八百余人报名，四百余人参会，获得本地政府及全国各企业、媒体、社区的广泛关注与大力支持。
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="w-100 mb-2" src="/image/review2.png" alt="review2" />
          <Carousel.Caption>
            <p className={`text-light ${styles.textShadow}`}>
              2018 年 5
              月，freeCodeCamp中国参与主办首届全球石墨烯开发者大会，与会一千余名开发者。目前freeCodeCamp正在开发区块链基础技术课程，并将持续致力于区块链开发者社群服务。
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>

    <section className="container text-start m-0 position-relative p-sm-0">
      <h2 id="situation" className="m-0 pt-5 pb-3 text-center fs-4">
        会议概况
      </h2>
      <ul className="list-unstyled">
        <li className="m-sm-3 d-flex my-3 mx-0">
          <strong className="w-25 ms-3">时间：</strong>
          <span>2018 年 11 月 10 日</span>
        </li>
        <li className="m-sm-3 d-flex my-3 mx-0">
          <strong className="w-25 ms-3">地点：</strong>
          <span className="w-75">
            上海、天津、深圳、成都、西安、杭州、广州、武汉、郑州、济南（北京站、重庆站因特殊原因取消，望谅解）
          </span>
        </li>
        <li className="m-sm-3 d-flex my-3 mx-0">
          <strong className="w-25 ms-3">会议规模：</strong>
          <span className="w-75">1800+ 参会者</span>
        </li>
        <li className="m-sm-3 d-flex my-3 mx-0">
          <strong className="w-25 ms-3">参会人员：</strong>
          <span className="w-75">
            前端开发者、区块链开发者、CTO、架构师、相关技术从业者
          </span>
        </li>
        <li className="m-sm-3 d-flex my-3 mx-0">
          <strong className="w-25 ms-3">主办方：</strong>
          <span>freeCodeCamp 中文社区</span>
        </li>
      </ul>
    </section>

    <section className={`${styles.snap} container m-0 p-sm-0`}>
      <h2 id="snap" className="text-center pt-5 pb-3 fs-4">
        大会亮点
      </h2>
      <Row
        xs={2}
        sm={5}
        as="ul"
        className="list-unstyled justify-content-around text-center"
      >
        <Col as="li" className={styles.media}>
          <img src="/image/meeting.png" />
          <p className="m-0 mt-3 mx-2">
            12 个城市社区同期举办，促进本地开发者技术分享与交流
          </p>
        </Col>
        <Col as="li" className={styles.media}>
          <img src="/image/meeting.png" />
          <p className="m-0 mt-3 mx-2">
            与数十位前端、区块链等领域的优秀开发者、技术负责人面对面交流
          </p>
        </Col>
        <Col as="li" className={styles.media}>
          <img src="/image/meeting.png" />
          <p className="m-0 mt-3 mx-2">
            部分城市设置现场招聘环节，为企业和开发者搭建沟通桥梁
          </p>
        </Col>
      </Row>
    </section>
  </Container>
);
