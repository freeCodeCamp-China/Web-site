import { FC } from "react";

import styles from '../../styles/conference/Snap.module.less';

const Snap: FC = () => {

    return (
        <div className={`${styles.snap}`} id="section_5">
            <div className={`${styles.container}   ${styles.animated}`}>
                <h2>大会亮点</h2>
                <div className={`${styles.flex_box}   ${styles.sm_flex_warped}`}>
                    <div className={`${styles.media}`}>
                        <img src="https://conf.freecodecamp.one/assets/meeting.png"/>
                        {/*-- <h4>会议</h4> --*/}
                        <p>12 个城市社区同期举办，促进本地开发者技术分享与交流</p>
                    </div>
                    <div className={`${styles.media}`}>
                        <img src="https://conf.freecodecamp.one/assets/meeting.png"/>
                        {/*-- <h4>会议</h4> --*/}
                        <p>与数十位前端、区块链等领域的优秀开发者、技术负责人面对面交流</p>
                    </div>
                    <div className={`${styles.media}`}>
                        <img src="https://conf.freecodecamp.one/assets/meeting.png"/>
                        {/*-- <h4>会议</h4> --*/}
                        <p>部分城市设置现场招聘环节，为企业和开发者搭建沟通桥梁</p>
                    </div>
                </div>
            </div>
        </div>
      );
}


export default Snap;
