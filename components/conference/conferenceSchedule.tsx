import { FC } from 'react';

import citySchedulesData from './../data/CitySchedulesData.json';
import styles from './ConferenceSchedule.module.less';

type Schedule = {
  time: string;
  topic: string;
  guest?: string;
};

type CitySchedules = {
  city: string;
  href?: string;
  schedules?: Schedule[];
};

export interface CityScheduleProps {
  citySchedulesList: CitySchedules[];
}

const { citySchedulesList } = citySchedulesData as CityScheduleProps;

export const CityScheduleInfo: FC = () => (
  <div className="text-center" id="schedule">
    <section
      className={`${styles.container} mx-auto my-0 position-relative ${styles.animated}`}
    >
      <h2>大会日程与报名通道</h2>
      <div className={styles.timeline}>
        {citySchedulesList?.map(({ city }) => (
          <span className="open p-3" key={city}>
            {city}
          </span>
        ))}
      </div>
      <div>
        {citySchedulesList?.map(({ city, href, schedules }) => (
          <div
            className="table_box"
            data-city={city}
            style={{ display: 'block' }}
            key={city}
          >
            <a target="_blank" href={href} rel="noreferrer">
              {href ? '点此报名' : '报名通道即将开启'}
            </a>
            {schedules === undefined || schedules?.length === 0 ? (
              <></>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>时间</th>
                    <th>主题</th>
                    <th>演讲嘉宾</th>
                  </tr>
                </thead>
                <tbody>
                  {schedules.map(({ time, topic, guest }) => (
                    <tr key={topic}>
                      <td>{time}</td>
                      <td>{topic}</td>
                      {guest !== undefined ? <td>{guest}</td> : <></>}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        ))}
      </div>
    </section>
  </div>
);
