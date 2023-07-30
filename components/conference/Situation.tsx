import { FC } from "react";

import styles from './Situation.module.less';

export const Situation: FC = () => (
        <div className={`${styles.situation}`} id="section_4">
            <div className={`${styles.container}   ${styles.animated}`}>
                <h2>2018 freeCodeConf 概况</h2>
                <ul className="sumary">
                    <li>
                      <strong>时间：</strong>
                      <time dateTime="2018-11-10">2018 年 11 月 10 日</time>
                    </li>
                    <li>
                      <strong>地点:</strong>
                      <span>上海、天津、深圳、成都、西安、杭州、广州、武汉、郑州、济南（北京站、重庆站因特殊原因取消，望谅解）</span>
                    </li>
                    <li>
                        <strong>会议规模：</strong>
                        <span>1800+ 参会者</span>
                    </li>
                    <li>
                      <strong>参会人员：</strong>
                      <span>前端开发者、区块链开发者、CTO、架构师、相关技术从业者</span>
                    </li>
                    <li>
                      <strong>主办方：</strong>
                      <span>freeCodeCamp 中文社区</span>
                    </li>
                </ul>
            </div>
        </div>
      );



