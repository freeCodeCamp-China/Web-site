import { FC } from 'react';

import styles from './ConferenceBase.module.less';

export const ConferenceBase: FC = () => (
  <div className={styles.base}>
    <div
      className={`${styles.abstract} pb-5 text-center bg-light`}
      id="abstract"
    >
      <section
        className={`${styles.container} m-0 position-relative p-sm-0 ${styles.animated}`}
      >
        <h2 className="m-0 py-4">大会宗旨</h2>
        <p className="text-start w-auto m-auto p-3 ">
          freeCodeConf 是 freeCodeCamp
          中国举办的每年一度大型联动技术大会，旨在联合 freeCodeCamp
          各城市本地开发者社区，促进高度垂直、高度人才集中、高度明星企业集结的互联网与软件行业技术交流。第一届
          freeCodeConf 将于 2018 年 11 月 10 日在全国 12
          个城市同期举办，诚邀广大开发者共享技术盛宴。
        </p>
      </section>
    </div>
    <div className={`${styles.review} text-center`} id="review">
      <div
        className={`${styles.container} m-0 position-relative p-sm-0  ${styles.animated}`}
      >
        <h2 className="m-0 py-5">往届活动回顾</h2>
        <div className={styles.review_item}>
          <img
            className={`${styles.revImg} mb-3`}
            src="https://conf.freecodecamp.one/assets/review1.png"
          />
          <p className="text-center p-3">
            2017 年 11 月，freeCodeCamp 成都社区举办 Web
            前端交流大会，八百余人报名，四百余人参会，获得本地政府及全国各企业、媒体、社区的广泛关注与大力支持。
          </p>
        </div>
        <div className={styles.review_item}>
          <img
            className={`${styles.revImg} mb-3`}
            src="https://conf.freecodecamp.one/assets/review2.png"
          />
          <p className="text-center p-3">
            2018 年 5 月，freeCodeCamp
            中国参与主办首届全球石墨烯开发者大会，与会一千余名开发者。目前
            freeCodeCamp
            正在开发区块链基础技术课程，并将持续致力于区块链开发者社群服务。
          </p>
        </div>
      </div>
    </div>
    <div className={`${styles.situation} text-start`} id="situation">
      <div
        className={`${styles.container} m-0 position-relative p-sm-0 ${styles.animated}`}
      >
        <h2 className="m-0 pb-5 text-center">2018 freeCodeConf 概况</h2>
        <ul className="list-unstyled">
          <li className="d-sm-flex m-4 m-sm-4 mt-0">
            <strong className="d-block w-25 w-sm-25">时间：</strong>
            <span>2018 年 11 月 10 日</span>
          </li>
          <li className="d-sm-flex m-4 m-sm-4 mt-0">
            <strong className="d-block w-25 w-sm-25">地点：</strong>
            <span className="w-75">
              上海、天津、深圳、成都、西安、杭州、广州、武汉、郑州、济南（北京站、重庆站因特殊原因取消，望谅解）
            </span>
          </li>
          <li className="d-sm-flex m-4 m-sm-4 mt-0">
            <strong className="d-block w-25 w-sm-25">会议规模：</strong>
            <span className="w-75">1800+ 参会者</span>
          </li>
          <li className="d-sm-flex m-4 m-sm-4 mt-0">
            <strong className="d-block w-25 w-sm-25">参会人员：</strong>
            <span className="w-75">
              前端开发者、区块链开发者、CTO、架构师、相关技术从业者
            </span>
          </li>
          <li className="d-sm-flex m-4 m-sm-4 mt-0">
            <strong className="d-block w-25 w-sm-25">主办方：</strong>
            <span>freeCodeCamp 中文社区</span>
          </li>
        </ul>
      </div>
    </div>
    <div className={styles.snap} id="snap">
      <div className={`${styles.container} m-0  p-sm-0 ${styles.animated}`}>
        <h2 className="text-center py-3">大会亮点</h2>
        <ul
          className={`${styles.sm_flex_warped} d-flex flex-sm-wrap list-unstyled`}
        >
          <li className={`${styles.media} w-50 text-center`}>
            <img src="https://conf.freecodecamp.one/assets/meeting.png" />
            <p className="m-0 mt-3">
              12 个城市社区同期举办，促进本地开发者技术分享与交流
            </p>
          </li>
          <li className={`${styles.media} w-50 text-center`}>
            <img src="https://conf.freecodecamp.one/assets/meeting.png" />
            <p className="m-0 mt-3">
              与数十位前端、区块链等领域的优秀开发者、技术负责人面对面交流
            </p>
          </li>
          <li className={`${styles.media} w-50 text-center`}>
            <img src="https://conf.freecodecamp.one/assets/meeting.png" />
            <p className="m-0 mt-3">
              部分城市设置现场招聘环节，为企业和开发者搭建沟通桥梁
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
