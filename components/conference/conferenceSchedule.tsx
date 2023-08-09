import { FC } from 'react';
import { Tab, Tabs } from 'react-bootstrap';

import citySchedulesData from './../data/CitySchedulesData.json';
import styles from './ConferenceSchedule.module.less';

type Schedule = Record<'time' | 'topic', string> & { guest?: string };

type CitySchedules = Record<'city', string> & {
  href?: string;
  schedules?: Schedule[];
};

export const CityScheduleInfo: FC = () => (
  <section
    className={`${styles.container} mx-auto my-0 position-relative ${styles.animated} text-center`}
    id="schedule"
  >
    <h2 className="fs-4 py-5">大会日程与报名通道</h2>

    <Tabs
      variant="pills"
      className={`${styles.sm_max_width} w-75 mb-2`}
      justify
    >
      {(citySchedulesData as CitySchedules[]).map(
        ({ city, href, schedules }) => (
          <Tab className="p-3" key={city} eventKey={city} title={city}>
            <div
              className={`${styles.table_box} w-100 overflow-x-auto`}
              data-city={city}
              key={city}
            >
              <a
                target="_blank"
                href={href}
                rel="noreferrer"
                className="px-3 pb-3 text-start d-block"
              >
                {href ? '点此报名' : '报名通道即将开启'}
              </a>
              {schedules !== undefined && schedules.length !== 0 ? (
                <table className={`${styles.sm_max_width} text-start w-75`}>
                  <thead>
                    <tr>
                      <th className="px-3 py-3 ">时间</th>
                      <th className="px-3 py-3 ">主题</th>
                      <th className="px-3 py-3">演讲嘉宾</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedules.map(({ time, topic, guest }) => (
                      <tr key={topic}>
                        <td className="px-3 py-2">{time}</td>
                        <td className="py-2">{topic}</td>
                        {guest ? <td className="py-2">{guest}</td> : <></>}
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <></>
              )}
            </div>
          </Tab>
        ),
      )}
    </Tabs>
  </section>
);
