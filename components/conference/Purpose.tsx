import { FC } from "react";

import styles from './Purpose.module.less';

export const Purpose: FC = () => (
    <div className={`${styles.abstract} pb-4 text-center`} id="section_2">
        <section className={`${styles.container} ${styles.animated}`}>
            <h2>大会宗旨</h2>
            <p>freeCodeConf 是 freeCodeCamp 中国举办的每年一度大型联动技术大会，旨在联合 freeCodeCamp 各城市本地开发者社区，促进高度垂直、高度人才集中、高度明星企业集结的互联网与软件行业技术交流。第一届 freeCodeConf 将于 2018 年 11 月 10 日在全国 12 个城市同期举办，诚邀广大开发者共享技术盛宴。</p>
        </section>
    </div>
  );