import { FC } from "react";

import styles from '../../styles/conference/Situation.module.less';

const Situation: FC = () => {

    return (
        <div className={`${styles.situation}`} id="section_4">
            <div className={`${styles.container}   ${styles.animated}`}>
                <h2>2018 freeCodeConf 概况</h2>
                <div className="sumary">
                    <p>
                    <span>时间:</span>
                    <span>2018 年 11 月 10 日</span>
                    </p>
                    <p>
                    <span>地点:</span>
                    <span>上海、天津、深圳、成都、西安、杭州、广州、武汉、郑州、济南（北京站、重庆站因特殊原因取消，望谅解）</span>
                    </p>
                    <p>
                        <span>会议规模:</span>
                        <span>1800+ 参会者</span>
                    </p>
                    <p>
                    <span>参会人员:</span>
                    <span>前端开发者、区块链开发者、CTO、架构师、相关技术从业者</span>
                    </p>
                    <p>
                    <span>主办方:</span>
                    <span>freeCodeCamp 中国</span>
                    </p>
                </div>
            </div>
        </div>
      );
}


export default Situation;
