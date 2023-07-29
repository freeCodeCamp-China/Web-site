import { FC } from "react";

import styles from '../../styles/conference/Review.module.less';

const Review: FC = () => {

    return (
        <div className={`${styles.review} text-center `} id="section_3">
            <div className={`${styles.container}   ${styles.animated}`}>
                <h2>往届活动回顾</h2>
                <div className={`${styles.review_item}  `}>
                    <img src="https://conf.freecodecamp.one/assets/review1.png" className={`${styles.revImg}  `}/>
                    <p>2017 年 11 月，freeCodeCamp 成都社区举办 Web 前端交流大会，八百余人报名，四百余人参会，获得本地政府及全国各企业、媒体、社区的广泛关注与大力支持。</p>
                </div>
                <div className={`${styles.review_item}  `}>
                    <img src="https://conf.freecodecamp.one/assets/review2.png" className={`${styles.revImg}  `}/>
                    <p>2018 年 5 月，freeCodeCamp 中国参与主办首届全球石墨烯开发者大会，与会一千余名开发者。目前 freeCodeCamp 正在开发区块链基础技术课程，并将持续致力于区块链开发者社群服务。</p>
                </div>
            </div>
        </div>
      );
}


export default Review;
